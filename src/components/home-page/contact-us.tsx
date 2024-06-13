'use client';
import { submitContactUsForm } from '@/actions/contact-us';
import { ContactUsSchema } from '@/schemas';
import { COMPANY_PROFILE } from '@/utils/const';
import FormatAddress from '@/utils/format-address';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader, Send } from 'lucide-react';
import React, { ChangeEvent, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import FormError from '../ui/FormError';
import FormSuccess from '../ui/FormSuccess';
import { Button } from '../ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

const need = [
	{
		id: 'Need more Details',
		label: 'Need more Details',
	},
	{
		id: 'Have some Question',
		label: 'Have some Question',
	},
	{
		id: 'Discuss Probate',
		label: 'Discuss Probate',
	},
	{
		id: 'Discuss Living Benefits',
		label: 'Discuss Living Benefits',
	},
	{
		id: 'Discus Tax free cash accumulation',
		label: 'Discus Tax free cash accumulation',
	},
	{
		id: 'Want to get Licensed',
		label: 'Want to get Licensed',
	},
	{
		id: 'Refer someone',
		label: 'Refer someone',
	},
	{
		id: 'Need a Policy',
		label: 'Need a Policy',
	},
	{
		id: 'Discuss Retirement Plan',
		label: 'Discuss Retirement Plan',
	},
	{
		id: 'Review my current Retirement Plan',
		label: 'Review my current Retirement Plan',
	},
	{
		id: 'Discuss Deductible expenses to Business',
		label: 'Discuss Deductible expenses to Business',
	},
	{
		id: 'Key employment retention',
		label: 'Key employment retention',
	},
] as const;

interface FormData {
	name: string;
	email: string;
	need: string;
	subject: string;
	message: string;
}

const initialFormData: FormData = {
	name: '',
	email: '',
	subject: '',
	message: '',
	need: '',
};

export default function ContactUs() {
	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof ContactUsSchema>>({
		resolver: zodResolver(ContactUsSchema),
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
	});

	const onSubmit = (values: z.infer<typeof ContactUsSchema>) => {
		setError('');
		setSuccess('');

		startTransition(() => {
			submitContactUsForm(values).then((data) => {
				if (data?.success) {
					toast.success(data.success);
					form.reset();
				}
				if (data?.error) {
					toast.error(data.error);
				}
			});
			console.log({ values });
			form.reset();
		});
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [successModal, setSuccessModal] = useState<boolean>(false);

	const handleChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const response = await fetch('api/sendmail', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			setSuccessModal(true);
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
				need: '',
			});
		}

		if (!response.ok) {
			alert('message not sent');
		}
	};

	return (
		<section className='px-10 py-20 max-w-6xl mx-auto'>
			<div className='text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10'>
				Contact Us
			</div>
			<div className='grid lg:grid-cols-2 gap-10'>
				<Form {...form}>
					<form
						className=''
						onSubmit={form.handleSubmit(onSubmit)}
						method='POST'
					>
						<div className=''>
							<div className='mt-5 grid grid-cols-2 gap-5'>
								<FormField
									name='name'
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Your Name
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder={
														'Your Name'
													}
													disabled={
														isPending
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name='email'
									control={form.control}
									render={({ field }) => (
										<FormItem className='col-span-2 md:col-span-1'>
											<FormLabel>
												Email Address
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder={
														'email@example.com'
													}
													type='email'
													disabled={
														isPending
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name='need'
									control={form.control}
									render={({ field }) => (
										<FormItem className='col-span-2'>
											<FormLabel>
												What do you need
												help with during the
												session?
											</FormLabel>
											<Select
												onValueChange={
													field.onChange
												}
												defaultValue={
													field.value
												}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder='Choose one' />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{need.map(
														(
															a,
															b
														) => (
															<SelectItem
																disabled={
																	isPending
																}
																key={
																	b
																}
																value={
																	a.id
																}
															>
																{
																	a.label
																}
															</SelectItem>
														)
													)}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name='subject'
									control={form.control}
									render={({ field }) => (
										<FormItem className='col-span-2'>
											<FormLabel>
												Subject
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder={
														'Enter subject'
													}
													disabled={
														isPending
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name='message'
									control={form.control}
									render={({ field }) => (
										<FormItem className='col-span-2'>
											<FormLabel>
												Message
											</FormLabel>
											<FormControl>
												<Textarea
													{...field}
													placeholder={
														'Write text here'
													}
													disabled={
														isPending
													}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						{error && (
							<div className='lg:col-span-2'>
								<FormError message='Error' />
							</div>
						)}
						{success && (
							<div className='lg:col-span-2'>
								<FormSuccess message='Success' />
							</div>
						)}

						<div className='mt-6 flex'>
							<Button
								type='submit'
								disabled={isPending}
								className='gap-1.5'
							>
								<span>SEND</span>
								{isPending ? (
									<Loader className=' animate-spin h-3 w-3' />
								) : (
									<Send className='h-3 w-3' />
								)}
							</Button>
						</div>
					</form>
				</Form>
				<div className='flex flex-col justify-center'>
					<div className='text-xl font-bold mb-10'>
						Have questions or want to schedule a consultation?
					</div>
					<p>
						Reach out to us today. We&apos;re here to address
						your inquiries and provide the guidance you need
						to achieve financial success.
					</p>
					<div className='flex mt-5 gap-x-3'>
						<div className=''>
							<div className='font-bold'>
								Office Address
							</div>
							<div className=''>
								<FormatAddress
									address={COMPANY_PROFILE.address}
								/>
							</div>
						</div>
					</div>
					<div className='flex mt-5 gap-x-3'>
						<div className=''>
							<div className='font-bold'>Phone</div>
							<div className=''>
								{COMPANY_PROFILE.phone}
							</div>
						</div>
					</div>
					<div className='flex mt-5 gap-x-3'>
						<div className=''>
							<div className='font-bold'>
								Email Address
							</div>
							<div className=''>
								{COMPANY_PROFILE.email}
							</div>
						</div>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{successModal && (
					<motion.div
						className='fixed backdrop-blur-[2px] top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className='bg-primary dark:bg-primary p-10 rounded-lg flex flex-col'>
							<p className='mb-2'>
								Message sent Succesfully
							</p>
							<Button
								className='mt-4 outline outline-green-500'
								onClick={() => setSuccessModal(false)}
							>
								Close
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
