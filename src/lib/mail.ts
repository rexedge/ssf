import { Resend } from 'resend';
import BecomeAnAgentMail from '../../emails/become-an-agent-mail';
import { IBecomeAnAgentSchema } from '@/actions/become-an-agent';
import BecomeAnAgentResponseEmail from '../../emails/become-an-agent-response-mail';

export const runtime = 'edge';

export const revalidate = 0;

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendBecomeAnAgentMail = async (options: IBecomeAnAgentSchema) => {
	await resend.emails.send({
		from: 'Smart Steps Solutions Team <support@smartstepssolutions.com>',
		to: ['info@smartstepssolutions.com', 'ap.oyeniran@gmail.com'],
		subject: `${options.fname} ${options.lname} wants to become an agent`,
		react: BecomeAnAgentMail(options),
	});
	await resend.emails.send({
		from: 'Smart Steps Solutions Team <support@smartstepssolutions.com>',
		to: options.email,
		subject: `Request Received`,
		react: BecomeAnAgentResponseEmail(),
	});
};
