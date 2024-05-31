'use server';

import { BecomeAnAgentSchema } from '@/schemas';
import * as z from 'zod';

export const submitBecomeAnAgentForm = async (
	values: z.infer<typeof BecomeAnAgentSchema>
) => {
	const validatedFields = BecomeAnAgentSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid Fields' };
	}

	const {
		email,
		phone,
		about,
		age,
		city,
		commission,
		experience,
		fname,
		fullparttime,
		hearaboutus,
		insurance,
		license,
		lname,
		motivation,
		occupation,
		postal,
		state,
		street,
		transportation,
		workexperience,
	} = validatedFields.data;

	try {
		console.log(validatedFields.data);
		// await sendWaitlistMail({
		// 	email: userInWaitlist.email,
		// 	referrerId: userInWaitlist.id,
		// }).then(async () => {
		// 	await db.waitlist.update({
		// 		where: { id: userInWaitlist.id },
		// 		data: {
		// 			emailSent: new Date(),
		// 		},
		// 	});
		// });

		return { success: 'Submitted successfully' };
	} catch (error) {
		return { error: 'Something went wrong!' };
	}
};
