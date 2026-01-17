import contactModel from "../models/contact.model.js";
import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        console.log("Saving message to DB...");
        const newMessage = await contactModel.create({ name, email, message });
        console.log("Message saved to DB:", newMessage._id);

        console.log("Setting up Nodemailer (SSL Mode - 465)...");
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Use SSL/TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            connectionTimeout: 20000, // 20 seconds
            greetingTimeout: 20000,
            socketTimeout: 20000
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        console.log("Attempting to send email via Port 465...");
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!", info.messageId);

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("DETAILED ERROR ON LIVE:", error);
        res.status(500).json({ message: "Server error during email sending", error: error.message });
    }
}