import contactModel from "../models/contact.model.js";
import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = await contactModel.create({ name, email, message });
        await newMessage.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New message from portfolio site: ${name}`,
            text: `You have a new message from your portfolio site. \n\n Name: ${name} \n\n Email: ${email} \n\n Message: ${message}`
        };
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to send message" });
    }
}