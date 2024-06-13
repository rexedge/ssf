'use server';

import { ContactUsSchema } from '@/schemas';
import * as z from 'zod';
import { contactUsMail, sendBecomeAnAgentMail } from '@/lib/mail';

export type IContactUsSchema = z.infer<typeof ContactUsSchema>;

export const submitContactUsForm = async (
	values: z.infer<typeof ContactUsSchema>
) => {
	const validatedFields = ContactUsSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid Fields' };
	}

	try {
		await contactUsMail(validatedFields.data);

		return { success: 'Submitted successfully' };
	} catch (error) {
		return { error: 'Something went wrong!' };
	}
};
