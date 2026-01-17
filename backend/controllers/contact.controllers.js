import contactModel from "../models/contact.model.js";
import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        console.log("Environment Check:", {
            hasUser: !!process.env.EMAIL_USER,
            hasPass: !!process.env.EMAIL_PASS
        });

        console.log("Saving message to DB...");
        const newMessage = await contactModel.create({ name, email, message });
        console.log("Message saved to DB:", newMessage._id);

        console.log("Setting up Nodemailer with Debugging...");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            logger: true, // Show internal logs
            debug: true,  // Show debug info
            connectionTimeout: 10000,
            greetingTimeout: 10000
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Message from ${name}`,
            text: `You have a new message from your portfolio site.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        console.log("Sending email...");
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("DETAILED ERROR:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}