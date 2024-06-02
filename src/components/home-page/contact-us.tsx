'use client';
import { COMPANY_PROFILE } from '@/utils/const';
import FormatAddress from '@/utils/format-address';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader, Send } from 'lucide-react';
import { Button } from '../ui/button';

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
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [loading, setLoading] = useState<boolean>(false);
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
		setLoading(true);

		const response = await fetch('api/sendmail', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			setLoading(false);
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
			setLoading(false);
			alert('message not sent');
		}
	};

	return (
		<section className='px-10 py-20 max-w-6xl mx-auto'>
			<div className='text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10'>
				Contact Us
			</div>
			<div className='grid lg:grid-cols-2 gap-10'>
				<form
					className=''
					onSubmit={handleSubmit}
					method='POST'
				>
					<div className=''>
						<div className='mt-5 grid grid-cols-2 gap-5'>
							<div className='col-span-2 md:col-span-1'>
								<label
									htmlFor='first-name'
									className='text-lg uppercase font-semibold'
								>
									Your Name
								</label>
								<div className='mt-2'>
									<input
										type='text'
										id='name'
										name='name'
										placeholder='Name'
										className='w-full bg-tertiary/20 dark:bg-primary border-spacing-1 rounded-lg p-2'
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>
							</div>

							<div className='col-span-2 md:col-span-1'>
								<label
									htmlFor='email'
									className='text-lg uppercase font-semibold'
								>
									Email Address
								</label>
								<div className='mt-2'>
									<input
										type='email'
										id='email'
										name='email'
										placeholder='Enter Email'
										autoComplete='email'
										className='w-full bg-tertiary/20 dark:bg-primary border-spacing-1 rounded-lg p-2'
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
							</div>
						</div>
						<div className='mt-5'>
							<label
								htmlFor='need'
								className='text-lg uppercase font-semibold'
							>
								What do you need help with during the
								session?
							</label>
							<div className='mt-2'>
								<select
									name='need'
									id='need'
									className='w-full bg-tertiary/20 dark:bg-primary border-spacing-1 rounded-lg p-2'
									onChange={handleChange}
								>
									<option value='Need more Details'>
										Need more Details
									</option>
									<option value='Have some Question'>
										Have some Question
									</option>
									<option value='Discuss Probate'>
										Discuss Probate
									</option>
									<option value='Discuss Living Benefits'>
										Discuss Living Benefits
									</option>
									<option value='Discus Tax free cash accumulation'>
										Discus Tax free cash
										accumulation
									</option>
									<option value='Want to get Licensed'>
										Want to get Licensed
									</option>
									<option value='Need a Policy'>
										Need a Policy
									</option>
									<option value='Refer someone'>
										Refer someone
									</option>
									<option value='Discuss Retirement Plan'>
										Discuss Retirement Plan
									</option>
									<option value='Review my current Retirement Plan'>
										Review my current Retirement
										Plan
									</option>
									<option value='Review my current Policy'>
										Review my current Policy
									</option>
									<option value='Discuss Deductible expenses to Business'>
										Discuss Deductible expenses to
										Business
									</option>
									<option value='Key employment retention'>
										Key employment retention
									</option>
								</select>
							</div>
						</div>
						<div className='mt-5'>
							<label
								htmlFor='subject'
								className='text-lg uppercase font-semibold'
							>
								Subject
							</label>
							<div className='mt-2'>
								<input
									type='text'
									id='subject'
									name='subject'
									placeholder='Enter subject'
									autoComplete='subject'
									className='w-full bg-tertiary/20 dark:bg-primary border-spacing-1 rounded-lg p-2'
									value={formData.subject}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
						<div className='mt-5'>
							<label
								htmlFor='message'
								className='text-lg uppercase font-semibold'
							>
								Message
							</label>
							<div className='mt-2'>
								<textarea
									id='message'
									name='message'
									rows={3}
									className='w-full bg-tertiary/20 dark:bg-primary border-spacing-1 rounded-lg p-2'
									placeholder='Write a few sentences.'
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
					</div>

					<div className='mt-6 flex items-center justify-start'>
						<Button
							type='submit'
							disabled={loading}
							className='gap-1.5'
						>
							<span>SEND</span>
							{loading ? (
								<Loader className=' animate-spin h-3 w-3' />
							) : (
								<Send className='h-3 w-3' />
							)}
						</Button>
					</div>
				</form>
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
