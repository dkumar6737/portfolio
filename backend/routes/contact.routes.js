import express from "express";
import { sendContactMessage } from "../controllers/contact.controllers.js";

const router = express.Router();

router.post("/", sendContactMessage);

export default router;
