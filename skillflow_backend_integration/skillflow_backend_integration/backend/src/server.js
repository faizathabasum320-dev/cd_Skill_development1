import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import assessmentRoutes from "./routes/assessment.js";
import roadmapRoutes from "./routes/roadmap.js";
import jobsRoutes from "./routes/jobs.js";
import progressRoutes from "./routes/progress.js";
import settingsRoutes from "./routes/settings.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL?.split(",").map((x) => x.trim()) || "*",
  credentials: true,
}));

app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "SkillFlow API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/settings", settingsRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SkillFlow API running on http://localhost:${PORT}`);
});