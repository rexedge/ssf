import { COMPANY_PROFILE } from '@/utils/const';
import FormatAddress from '@/utils/format-address';
import React from 'react';

export default function ContactUs() {
	return (
		<section className='px-10 py-20'>
			<div className='text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10'>
				Contact Us
			</div>
			<div className='grid lg:grid-cols-2 gap-10'>
				<form className=''>
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
										name=''
										placeholder='Name'
										className='w-full bg-teal-100 dark:bg-teal-900 border-spacing-1 rounded-lg p-2'
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
										id='email'
										name='email'
										type='email'
										placeholder='Enter Email'
										autoComplete='email'
										className='w-full bg-teal-100 dark:bg-teal-900 border-spacing-1 rounded-lg p-2'
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
									id='subject'
									name='subject'
									type='subject'
									placeholder='Enter subject'
									autoComplete='subject'
									className='w-full bg-teal-100 dark:bg-teal-900 border-spacing-1 rounded-lg p-2'
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
									defaultValue={''}
								/>
							</div>
						</div>
					</div>

					<div className='mt-6 flex items-center justify-start gap-x-6'>
						<button
							type='submit'
							className='rounded-md bg-primary-dark px-10 py-2 uppercase font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-100 dark:bg-teal-900'
						>
							Send
						</button>
					</div>
				</form>
				<div className='flex flex-col justify-center'>
					<div className='text-xl font-bold mb-10'>
						Have questions or want to schedule a consultation?
					</div>
					<p>
						Reach out to us today. We're here to address your
						inquiries and provide the guidance you need to
						achieve financial success.
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
		</section>
	);
}
