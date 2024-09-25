import { Resend } from 'resend';
import BecomeAnAgentMail from '../../emails/become-an-agent-mail';
import { IBecomeAnAgentSchema } from '@/actions/become-an-agent';
import BecomeAnAgentResponseEmail from '../../emails/become-an-agent-response-mail';
import { IContactUsSchema } from '@/actions/contact-us';
import ContactUsResponseEmail from '../../emails/contact-us-response-mail';
import ContactUsMail from '../../emails/contact-us-mail';

export const runtime = 'edge';

export const revalidate = 0;

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendBecomeAnAgentMail = async (options: IBecomeAnAgentSchema) => {
	await resend.emails.send({
		from: 'Smart Steps Solutions Team <info@smartstepssolutions.com>',
		to: ['info@smartstepssolutions.com'],
		subject: `${options.fname} ${options.lname} wants to become an agent`,
		react: BecomeAnAgentMail(options),
	});
	await resend.emails.send({
		from: 'Smart Steps Solutions Team <info@smartstepssolutions.com>',
		to: options.email,
		subject: `Request Received`,
		react: BecomeAnAgentResponseEmail(),
	});
};

export const contactUsMail = async (options: IContactUsSchema) => {
	await resend.emails.send({
		from: 'Smart Steps Solutions Team <info@smartstepssolutions.com>',
		to: ['info@smartstepssolutions.com'],
		subject: `${options.name} wants to ${options.need}`,
		react: ContactUsMail(options),
	});
	await resend.emails.send({
		from: 'Smart Steps Solutions Team <info@smartstepssolutions.com>',
		to: options.email,
		subject: `Request Received`,
		react: ContactUsResponseEmail(),
	});
};
