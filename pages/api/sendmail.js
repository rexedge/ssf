import nodemailer from 'nodemailer';

export default async function ContactAPI(req, res) {
	const user = process.env.GMAIL_USER;
	const { name, email, message, subject, need } = req.body;

	const data = {
		name,
		email,
		message,
		subject,
		need
	};
	console.log(data);

	try {

		const transporter = nodemailer.createTransport({
			host: 'smtp.zoho.com',
			port: 465,
			secure: true,
			auth: {
				user: user,
				pass: process.env.GMAIL_PASSWORD,
			},
		});

		// Sending the first email to info@smartstepssolutions.com
		const mail = await transporter.sendMail({
			from: 'info@smartstepssolutions.com',
			to: 'info@smartstepssolutions.com',
			replyTo: email,
			subject: subject,
			html: `
				<p> Name: ${name} </p>
				<p> Email: ${email} </p>
				<p> Message: ${message} </p>
				`,
		});

		console.log('Message sent: ', mail.messageId);

		// Sending the acknowledgment email to the sender
		const acknowledgmentTemplate = `
			<p>Dear ${name},</p>
			<p>Thank you for contacting us. We have received your message and a representative will get back to you shortly.</p>
			<p>Best regards,</p>
			<p>The Smart Steps Solution Team</p>
		`;

		const acknowledgmentMail = await transporter.sendMail({
			from: 'info@smartstepssolutions.com',
			to: email,
			replyTo: 'info@smartstepssolutions.com',
			subject: 'Acknowledgment - We have received your message',
			html: acknowledgmentTemplate,
		});

		console.log('Acknowledgment email sent:', acknowledgmentMail.messageId);

		return res
			.status(200)
			.json({ message: 'success', acknowledgmentMailId: acknowledgmentMail.messageId });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Message not sent',
		});
	}
}
