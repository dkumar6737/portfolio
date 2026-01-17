import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['frontend', 'backend', 'tool', 'other'],
        default: 'other'
    },
    proficiency: {
        type: Number,
        min: 0,
        max: 100
    }
}, { timestamps: true });

const skillModel = mongoose.model('skill', skillSchema);
export default skillModel;
