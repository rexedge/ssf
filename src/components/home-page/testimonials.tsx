import { TESTIMONIALS } from '@/utils/const';
import Image from 'next/image';
import React from 'react';

export default function Testimonials() {
	return (
		<section className='px-10 py-20 bg-teal-100 dark:bg-teal-900 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
			<div className='md:col-span-2 lg:col-span-3 text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10'>
				TESTIMONIALS
			</div>
			{TESTIMONIALS.map((testimonial) => (
				<div
					key={testimonial.id}
					className='md:col-span-1 bg-white dark:bg-black p-5 rounded-lg mb-5 text-center'
				>
					<Image
						height={200}
						width={200}
						alt=''
						src={testimonial.image}
						className='mx-auto rounded-full h-20 w-20 object-cover object-center mb-5'
					/>
					<p className='font-bold text-lg uppercase mb-10'>
						{testimonial.name}
					</p>
					{testimonial.testimony}
				</div>
			))}
		</section>
	);
}
