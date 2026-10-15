import express from "express";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const result = await pool.query(
    "SELECT notifications, dark_mode FROM settings WHERE user_id=$1",
    [req.user.id]
  );

  res.json({ settings: result.rows[0] || { notifications: true, dark_mode: false } });
});

router.put("/", requireAuth, async (req, res) => {
  const notifications = req.body.notifications !== false;
  const darkMode = Boolean(req.body.dark_mode);

  const result = await pool.query(
    `INSERT INTO settings (user_id, notifications, dark_mode)
     VALUES ($1, $2, $3)
     ON CONFLICT (user_id)
     DO UPDATE SET notifications=EXCLUDED.notifications,
                   dark_mode=EXCLUDED.dark_mode,
                   updated_at=NOW()
     RETURNING *`,
    [req.user.id, notifications, darkMode]
  );

  res.json({ settings: result.rows[0] });
});

export default router;