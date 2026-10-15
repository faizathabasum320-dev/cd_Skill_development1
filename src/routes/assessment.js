import express from "express";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/questions", requireAuth, async (req, res) => {
  const result = await pool.query(
    `SELECT id, skill, question, options
     FROM assessment_questions
     ORDER BY id`
  );

  res.json({ questions: result.rows });
});

router.post("/submit", requireAuth, async (req, res) => {
  const { answers } = req.body;

  if (!Array.isArray(answers)) {
    return res.status(400).json({ message: "answers must be an array" });
  }

  const questions = await pool.query(
    `SELECT id, skill, correct_answer
     FROM assessment_questions
     ORDER BY id`
  );

  let correct = 0;
  const skillStats = {};

  questions.rows.forEach((q, index) => {
    if (!skillStats[q.skill]) {
      skillStats[q.skill] = { total: 0, correct: 0 };
    }

    skillStats[q.skill].total += 1;

    if (answers[index] === q.correct_answer) {
      correct += 1;
      skillStats[q.skill].correct += 1;
    }
  });

  const score = questions.rowCount
    ? Math.round((correct / questions.rowCount) * 100)
    : 0;

  const result = await pool.query(
    `INSERT INTO assessment_results (user_id, score, answers, skill_stats)
     VALUES ($1, $2, $3::jsonb, $4::jsonb)
     RETURNING id, score, answers, skill_stats, completed_at`,
    [
      req.user.id,
      score,
      JSON.stringify(answers),
      JSON.stringify(skillStats),
    ]
  );

  res.json({ result: result.rows[0] });
});

router.get("/result", requireAuth, async (req, res) => {
  const result = await pool.query(
    `SELECT id, score, answers, skill_stats, completed_at
     FROM assessment_results
     WHERE user_id=$1
     ORDER BY completed_at DESC
     LIMIT 1`,
    [req.user.id]
  );

  res.json({ result: result.rows[0] || null });
});

export default router;