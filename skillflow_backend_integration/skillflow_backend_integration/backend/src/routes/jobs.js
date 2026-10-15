import express from "express";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  const search = String(req.query.search || "").trim();

  const result = search
    ? await pool.query(
        `SELECT id, name, company, location, match_percent, description
         FROM jobs
         WHERE name ILIKE $1 OR company ILIKE $1
         ORDER BY match_percent DESC`,
        [`%${search}%`]
      )
    : await pool.query(
        `SELECT id, name, company, location, match_percent, description
         FROM jobs
         ORDER BY match_percent DESC`
      );

  res.json({ jobs: result.rows });
});

export default router;