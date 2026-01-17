
import express from "express";
import { getAllSkills, createSkills } from "../controllers/skill.controllers.js";

const router = express.Router();

router.get("/", getAllSkills);
router.post("/", createSkills);

export default router;