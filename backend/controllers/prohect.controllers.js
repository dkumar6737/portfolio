import projectModel from "../models/project.model.js";

//Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await projectModel.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error in fetching projects!", error: error.message })
    }
};


//Created all projects
export const createProjects = async (req, res) => {
    try {
        const { title, description, image, technologies, link, githubLink } = req.body;

        const newProject = new projectModel({
            title,
            description,
            image,
            technologies,
            link,
            githubLink
        });

        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ message: "Error in creating projects!", error: error.message })
    }
};