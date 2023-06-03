import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
	const user = process.env.GMAIL_USER
	const { name, email, message, subject } = req.body

	const data = {
		name, email, message, subject
	}
	const transporter = nodemailer.createTransport({
		host: "smtp.zoho.com",
		port: 465,
		secure: true,
		auth: {
			user: user,
			pass: process.env.GMAIL_PASSWORD,
		}
	});

	try {
		const mail = await transporter.sendMail({
			from: 'info@smartstepssolution.com',
			to: [email, 'info@smartstepssolution.com'],
			replyTo: 'info@smartstepssolution.com',
			subject: `${subject}`,
			html: `
			<p> Name: ${name} </p>
			<p> Email: ${email} </p>
			<p> Message: ${message} </p>
			`,
		})

		console.log("Message sent: ", mail.messageId);
		return res.status(200).json({ message: "success" })
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Message not sent"
		})
	}
}