import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    }
}, { timestamps: true });


const projectModel = mongoose.model('project', projectSchema);
export default projectModel;