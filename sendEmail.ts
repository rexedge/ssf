import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const sendEmail = async (formData: FormData): Promise<void> => {
	const { name, email, subject, message } = formData;

	// Create a Nodemailer transporter
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASSWORD,
		},
	});

	// Define the email options
	const mailOptions = {
		from: 'sender@example.com', // Replace with your sender email address
		to: [email, 'ap.oyeniran@gmail.com'],
		subject,
		text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
	};

	try {
		// Send the email
		await transporter.sendMail(mailOptions);
		console.log('Email sent successfully');
	} catch (error) {
		console.error('Error sending email:', error);
		throw new Error('Failed to send email. Please try again later.');
	}
};

export default sendEmail;
