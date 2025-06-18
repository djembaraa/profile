import express from "express";
import cors from "cors";
import projectsRouter from "./api/projects.js";
import experienceRouter from "./api/experience.js";
import skillsRouter from "./api/skills.js";
import certificatesRouter from "./api/certificates.js";
import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/skills", skillsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/certificates", certificatesRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
