import * as z from 'zod';

export const BecomeAnAgentSchema = z.object({
	email: z.string().email(),
	name: z.string().min(5, { message: 'Enter valid name' }),
});
