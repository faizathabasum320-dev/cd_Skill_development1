import express from "express";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const result = await pool.query(
    `SELECT p.*, u.name, u.email
     FROM profiles p
     JOIN users u ON u.id = p.user_id
     WHERE p.user_id = $1`,
    [req.user.id]
  );

  res.json({ profile: result.rows[0] || null });
});

router.put("/", requireAuth, async (req, res) => {
  const {
    phone,
    location,
    education,
    degree,
    university,
    experience,
    bio,
  } = req.body;

  const result = await pool.query(
    `UPDATE profiles
     SET phone=$1, location=$2, education=$3, degree=$4,
         university=$5, experience=$6, bio=$7, updated_at=NOW()
     WHERE user_id=$8
     RETURNING *`,
    [
      phone ?? "",
      location ?? "",
      education ?? "",
      degree ?? "",
      university ?? "",
      experience ?? "",
      bio ?? "",
      req.user.id,
    ]
  );

  res.json({ profile: result.rows[0] });
});

export default router;