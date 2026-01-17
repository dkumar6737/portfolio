import contactModel from "../models/contact.model.js";
import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        console.log("Saving message to DB...");
        const newMessage = await contactModel.create({ name, email, message });
        console.log("Message saved to DB:", newMessage._id);

        console.log("Setting up Nodemailer (Live Mode)...");
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false // Helps with some hosting environments
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Message: ${name}`,
            text: `You have a new message from your portfolio.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        console.log("Sending email...");
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("DETAILED ERROR:", error);
        res.status(500).json({ message: "Failed to send message", error: error.message });
    }
}