import express from "express";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const result = await pool.query(
    `SELECT r.id, r.title, r.skill, r.description,
            COALESCE(rp.completed, false) AS completed
     FROM roadmap_modules r
     LEFT JOIN roadmap_progress rp
       ON rp.module_id = r.id AND rp.user_id = $1
     ORDER BY r.id`,
    [req.user.id]
  );

  res.json({ roadmap: result.rows });
});

router.put("/:id", requireAuth, async (req, res) => {
  const moduleId = Number(req.params.id);
  const completed = Boolean(req.body.completed);

  const result = await pool.query(
    `INSERT INTO roadmap_progress (user_id, module_id, completed)
     VALUES ($1, $2, $3)
     ON CONFLICT (user_id, module_id)
     DO UPDATE SET completed=EXCLUDED.completed, updated_at=NOW()
     RETURNING *`,
    [req.user.id, moduleId, completed]
  );

  res.json({ progress: result.rows[0] });
});

export default router;