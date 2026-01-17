import contactModel from "../models/contact.model.js";
import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log("Saving message to DB...");
        const newMessage = await contactModel.create({ name, email, message });
        console.log("Message saved to DB:", newMessage._id);

        console.log("Setting up Nodemailer...");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `New message from portfolio site: ${name}`,
            text: `You have a new message from your portfolio site. \n\n Name: ${name} \n\n Email: ${email} \n\n Message: ${message}`
        };

        console.log("Sending email...");
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("DETAILED ERROR:", error); // Log the full error object
        res.status(500).json({ message: "Failed to send message", error: error.message });
    }
}