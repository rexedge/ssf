'use server';

import { BecomeAnAgentSchema } from '@/schemas';
import * as z from 'zod';
import { Resend } from 'resend';
import { sendBecomeAnAgentMail } from '@/lib/mail';

export type IBecomeAnAgentSchema = z.infer<typeof BecomeAnAgentSchema>;

export const submitBecomeAnAgentForm = async (
	values: z.infer<typeof BecomeAnAgentSchema>
) => {
	const validatedFields = BecomeAnAgentSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid Fields' };
	}

	try {
		await sendBecomeAnAgentMail(validatedFields.data);

		return { success: 'Submitted successfully' };
	} catch (error) {
		return { error: 'Something went wrong!' };
	}
};
