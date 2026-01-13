import express from "express";
import { getAllProjects, createProjects } from "../controllers/prohect.controllers.js";

const router = express.Router();

router.get("/", getAllProjects);
router.post("/", createProjects);

export default router;