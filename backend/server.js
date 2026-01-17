import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import projectRoutes from "./routes/project.routes.js";
import skillRoutes from "./routes/skill.routes.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();
const app = express();

//Middleware
app.use(cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contact', contactRoutes);

// health check
app.get('/', (req, res) => {
    res.send("Hello from the backend!")
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portofolio";
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB", error);
    });
