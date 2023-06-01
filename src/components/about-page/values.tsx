import React from 'react';
import {
	UserGroupIcon,
	CurrencyDollarIcon,
	LightBulbIcon,
} from '@heroicons/react/solid';

const Values: React.FC = () => {
	return (
		<section className='min-h-full bg-teal-100 dark:bg-teal-800'>
			<div className='container mx-auto px-4 py-10 text-center'>
				<h2 className='text-4xl font-bold mb-16'>Our Values</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					<div className='flex flex-col items-center'>
						<UserGroupIcon className='h-20 w-20 mb-2 text-teal-600' />
						<h3 className='text-xl font-bold mb-2'>
							Integrity
						</h3>
						<p className=''>
							We conduct our business with the utmost
							integrity, placing our clients&apos; best
							interests at the forefront of everything we
							do. Honesty, transparency, and ethical
							practices are the cornerstones of our
							approach.
						</p>
					</div>
					<div className='flex flex-col items-center'>
						<CurrencyDollarIcon className='h-20 w-20 mb-2 text-teal-600' />
						<h3 className='text-xl font-bold mb-2'>
							Client-Centric Focus
						</h3>
						<p className=''>
							We are dedicated to building long-term
							relationships with our clients, understanding
							their unique goals and aspirations. By
							putting our clients&apos; needs first, we
							strive to deliver personalized solutions that
							meet their financial objectives and exceed
							their expectations.
						</p>
					</div>
					<div className='flex flex-col items-center'>
						<LightBulbIcon className='h-20 w-20 mb-2 text-teal-600' />
						<h3 className='text-xl font-bold mb-2'>
							Education and Empowerment
						</h3>
						<p className=''>
							We believe in empowering our clients through
							education and knowledge. We are committed to
							providing clear, accessible information,
							helping our clients make informed decisions
							and take an active role in their financial
							journey.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
