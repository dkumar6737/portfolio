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


//Created projects (Handled single object or array)
export const createProjects = async (req, res) => {
    try {
        const data = req.body;

        if (Array.isArray(data)) {
            // If it's an array, use insertMany
            const newProjects = await projectModel.insertMany(data);
            res.status(201).json(newProjects);
        } else {
            // If it's a single object
            const { title, description, image, technologies, link, githubLink } = data;
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
        }
    } catch (error) {
        res.status(500).json({ message: "Error in creating projects!", error: error.message })
    }
};