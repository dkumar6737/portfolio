import contactModel from "../models/contact.model.js";

export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        console.log("Saving message to DB backup...");
        const newMessage = await contactModel.create({ name, email, message });
        console.log("Message saved to DB:", newMessage._id);

        // We removed Nodemailer because hosting providers block SMTP.
        // The email is now sent directly from the frontend using EmailJS.

        res.status(200).json({
            message: "Message saved to database successfully.",
            dbId: newMessage._id
        });
    } catch (error) {
        console.error("DATABASE ERROR:", error);
        res.status(500).json({ message: "Failed to save message to database", error: error.message });
    }
}