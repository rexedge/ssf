import { COMPANY_PROFILE } from '@/utils/const';
import Image from 'next/image';
import React from 'react';

export default function Testimonials() {
	return (
		<section className='px-10 py-20 bg-teal-100 dark:bg-teal-900 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
			<div className='md:col-span-2 lg:col-span-3 text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10'>
				TESTIMONIALS
			</div>
			<div className='md:col-span-1 bg-white dark:bg-black p-5 rounded-lg mb-5 text-center'>
				<Image
					height={200}
					width={200}
					alt=''
					src={'/john.jpg'}
					className='mx-auto rounded-full h-20 w-20 object-cover object-center mb-5'
				/>
				<p className='font-bold text-lg uppercase mb-10'>
					John Smith
				</p>
				&quot;Thanks to Welcome to {COMPANY_PROFILE.name} Services,
				a leading provider of comprehensive financial solutions
				designed to empower individuals and families on their
				journey to financial success. With years of industry
				experience and a passion for helping others, our team is
				committed to guiding you towards a secure and prosperous
				future. Services, I&apos;ve gained a deeper understanding of
				how to protect my income and make the most of my financial
				opportunities. Their guidance has been invaluable.&quot;
			</div>
			<div className='md:col-span-1 bg-white dark:bg-black p-5 rounded-lg mb-5 text-center'>
				<Image
					height={200}
					width={200}
					alt=''
					src={'/emily.jpg'}
					className='mx-auto rounded-full h-20 w-20 object-cover object-center mb-5'
				/>
				<p className='font-bold text-lg uppercase mb-10'>
					Emily Johnson
				</p>
				&quot;I highly recommend Welcome to {COMPANY_PROFILE.name}{' '}
				Services, a leading provider of comprehensive financial
				solutions designed to empower individuals and families on
				their journey to financial success. With years of industry
				experience and a passion for helping others, our team is
				committed to guiding you towards a secure and prosperous
				future. Services to anyone seeking financial security and
				expert advice. Their personalized approach and comprehensive
				services have exceeded my expectations.&quot;
			</div>
			<div className='md:col-span-1 bg-white dark:bg-black p-5 rounded-lg mb-5 text-center'>
				<Image
					height={200}
					width={200}
					alt=''
					src={'/alexa.jpg'}
					className='mx-auto rounded-full h-20 w-20 object-cover object-center mb-5'
				/>
				<p className='font-bold text-lg uppercase mb-10'>
					Alexa Smith
				</p>
				&quot;Thanks to Welcome to {COMPANY_PROFILE.name} Services,
				a leading provider of comprehensive financial solutions
				designed to empower individuals and families on their
				journey to financial success. With years of industry
				experience and a passion for helping others, our team is
				committed to guiding you towards a secure and prosperous
				future. Services, I&apos;ve learned how to create a solid
				investment portfolio and plan for my future. Their expertise
				has been essential in helping me achieve my financial
				goals.&quot;
			</div>
		</section>
	);
}
