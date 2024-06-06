import { TESTIMONIALS } from '@/utils/const';
import Image from 'next/image';
import React from 'react';

export default function Testimonials() {
	return (
		<section className='flex flex-col gap-6 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto'>
			<div className='space-y-4 text-center'>
				<div className='inline-block rounded-lg bg-tertiary/20 text-tertiary font-bold px-3 py-1 text-sm dark:bg-tertiary'>
					Testimonials
				</div>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary'>
					What our customers say
				</h2>
				<p className='max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
					Hear from our satisfied customers about their
					experience with our product.
				</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{TESTIMONIALS.map((testimony, k) => (
					<div
						className='bg-tertiary/10 rounded-lg shadow-md dark:bg-tertiary dark:text-tertiary-50'
						key={k}
					>
						<div className='flex items-center space-x-4 p-4'>
							<Image
								alt={`Smart Steps Solutions Testimony By ${testimony.name}`}
								className='rounded-full h-16 w-16 object-cover'
								height={64}
								src={testimony.image}
								width={64}
							/>
							<div>
								<h3 className='font-semibold'>
									{testimony.name}
								</h3>
							</div>
						</div>
						<div className='p-4'>
							<p className='text-gray-700 dark:text-gray-300 line-clamp-6'>
								{testimony.testimony}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
