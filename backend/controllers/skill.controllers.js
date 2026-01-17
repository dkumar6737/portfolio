import skillModel from "../models/skill.model.js";

//get all skills
export const getAllSkills = async (req, res) => {
    try {
        const skills = await skillModel.find().sort({ createdAt: -1 });
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: "Error in fetching skills!", error: error.message })
    }
};


// Creted skills
export const createSkills = async (req, res) => {
    try {
        const data = req.body;
        if (Array.isArray(data)) {
            const newSkills = await skillModel.insertMany(data);
            res.status(201).json(newSkills);
        } else {
            const { name, icon, color, description, category, proficiency } = data;
            const newSkill = new skillModel({
                name,
                icon,
                color,
                description,
                category,
                proficiency
            });
            await newSkill.save();
            res.status(201).json(newSkill);
        }
    } catch (error) {
        res.status(500).json({ message: "Error in creating skills!", error: error.message })
    }
}