'use client';
import { COMPANY_PROFILE } from '@/utils/const';
import FormatAddress from '@/utils/format-address';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../ui/button';
import { AnimatePresence, motion } from 'framer-motion';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const initialFormData: FormData = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

export default function ContactUs() {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [loading, setLoading] = useState<boolean>(false);
	const [successModal, setSuccessModal] = useState<boolean>(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
			setFormData({ name: '', email: '', subject: '', message: '' });
		}

		if (!response.ok) {
			setLoading(false);
			alert('message not sent');
		}
	};

	return (
		<section className='px-10 py-20'>
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
										className='w-full bg-teal-100 dark:bg-teal-900 border-spacing-1 rounded-lg p-2'
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
										className='w-full bg-teal-100 dark:bg-teal-900 border-spacing-1 rounded-lg p-2'
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
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
									className='w-full bg-teal-100 dark:bg-teal-900 border-spacing-1 rounded-lg p-2'
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
									className='w-full bg-teal-100 dark:bg-teal-900 border-spacing-1 rounded-lg p-2'
									placeholder='Write a few sentences.'
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
					</div>

					<div className='mt-6 flex items-center justify-start gap-x-6'>
						<Button
							type='submit'
							disabled={loading}
							className='rounded-md bg-teal-600 px-10 py-2 uppercase font-semibold shadow-sm hover:bg-teal-500'
						>
							{loading ? (
								<div className='flex'>
									<svg
										version='1.1'
										id='L7'
										xmlns='http://www.w3.org/2000/svg'
										xmlnsXlink='http://www.w3.org/1999/xlink'
										x='0px'
										y='0px'
										viewBox='0 0 100 100'
										enable-background='new 0 0 100 100'
										xmlSpace='preserve'
										width={24}
										height={24}
										className='mr-3'
									>
										<path
											fill='currentColor'
											d='M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z'
										>
											<animateTransform
												attributeName='transform'
												attributeType='XML'
												type='rotate'
												dur='2s'
												from='0 50 50'
												to='360 50 50'
												repeatCount='indefinite'
											/>
										</path>
										<path
											fill='currentColor'
											d='M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z'
										>
											<animateTransform
												attributeName='transform'
												attributeType='XML'
												type='rotate'
												dur='1s'
												from='0 50 50'
												to='-360 50 50'
												repeatCount='indefinite'
											/>
										</path>
										<path
											fill='currentColor'
											d='M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z'
										>
											<animateTransform
												attributeName='transform'
												attributeType='XML'
												type='rotate'
												dur='2s'
												from='0 50 50'
												to='360 50 50'
												repeatCount='indefinite'
											/>
										</path>
									</svg>
									<span>Processing...</span>
								</div>
							) : (
								<span>send</span>
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
						<div className='bg-teal-100 dark:bg-teal-900 p-10 rounded-lg flex flex-col'>
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
