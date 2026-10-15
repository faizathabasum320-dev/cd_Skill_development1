import express from "express";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const [assessment, roadmap, profile] = await Promise.all([
    pool.query(
      `SELECT score, completed_at
       FROM assessment_results
       WHERE user_id=$1
       ORDER BY completed_at DESC LIMIT 1`,
      [req.user.id]
    ),
    pool.query(
      `SELECT COUNT(*) FILTER (WHERE rp.completed = true) AS completed,
              COUNT(*) AS total
       FROM roadmap_modules rm
       LEFT JOIN roadmap_progress rp
         ON rp.module_id=rm.id AND rp.user_id=$1`,
      [req.user.id]
    ),
    pool.query(
      `SELECT phone, location, education, degree, university, experience, bio
       FROM profiles WHERE user_id=$1`,
      [req.user.id]
    ),
  ]);

  const p = profile.rows[0] || {};
  const profileFields = [
    p.phone, p.location, p.education, p.degree,
    p.university, p.experience, p.bio
  ];
  const profileCompletion = Math.round(
    (profileFields.filter(Boolean).length / profileFields.length) * 100
  );

  const r = roadmap.rows[0];

  res.json({
    progress: {
      skillScore: assessment.rows[0]?.score ?? 0,
      roadmapCompleted: Number(r?.completed ?? 0),
      roadmapTotal: Number(r?.total ?? 0),
      profileCompletion,
      lastAssessment: assessment.rows[0]?.completed_at ?? null,
    },
  });
});

export default router;