import React from 'react';
import {
	DocumentTextIcon,
	CurrencyDollarIcon,
	AcademicCapIcon,
} from '@heroicons/react/solid';

const Expertise: React.FC = () => {
	return (
		<section className='min-h-full'>
			<div className='container mx-auto px-4 py-10 text-center'>
				<h2 className='text-4xl font-bold mb-16'>Our Expertise</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					<div className='flex flex-col items-center'>
						<DocumentTextIcon className='text-teal-500 h-20 w-20 mb-5' />
						<div>
							<h3 className='text-xl font-bold mb-2'>
								Experienced Professionals
							</h3>
							<p className='mb-4'>
								Our team is comprised of highly skilled
								financial experts with a deep
								understanding of the industry. We have
								the knowledge and experience to navigate
								the ever-changing financial landscape
								and guide you towards informed decisions
								that align with your unique
								circumstances.
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center'>
						<CurrencyDollarIcon className='text-teal-500 h-20 w-20 mb-5' />
						<div>
							<h3 className='text-xl font-bold mb-2'>
								Holistic Approach
							</h3>
							<p className='mb-4'>
								We take a holistic approach to financial
								planning, considering all aspects of
								your financial life. Whether you need
								assistance with protecting your income,
								growing your wealth, or planning for
								retirement, we provide comprehensive
								solutions tailored to your specific
								needs and goals.
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center'>
						<AcademicCapIcon className='text-teal-500 h-20 w-20 mb-5' />
						<div>
							<h3 className='text-xl font-bold mb-2'>
								Continuous Learning
							</h3>
							<p className='mb-4'>
								We are committed to staying at the
								forefront of industry trends,
								regulations, and strategies. Through
								ongoing education and professional
								development, we ensure that our advice
								is informed, up-to-date, and aligned
								with the best practices in the financial
								field.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
