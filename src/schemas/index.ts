import * as z from 'zod';

export const BecomeAnAgentSchema = z.object({
	email: z.string().email(),
	fname: z.string().min(5, { message: 'Enter valid first name' }),
	lname: z.string().min(5, { message: 'Enter valid last name' }),
	phone: z.string(),
	insurance: z.string(),
	age: z.string(),
	experience: z.string(),
	license: z.string(),
	transportation: z.string(),
	fullparttime: z.string(),
	commission: z.string(),
	workexperience: z.string(),
	motivation: z.string(),
	street: z.string(),
	occupation: z.string(),
	hearaboutus: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: 'You have to select at least one item.',
		}),
	about: z.string(),
});
