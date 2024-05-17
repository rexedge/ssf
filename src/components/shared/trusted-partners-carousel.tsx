'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { TRUSTED_PARTNERS_LOGO } from '@/utils/const';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React from 'react';

export default function TrustedPartnersCarousel() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center'>
					<div className='space-y-3 text-center'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Our Trusted Partners
						</h2>
						<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							We've had the pleasure of working with some
							of the best companies in the industry.
						</p>
					</div>
					<div className='mt-8 w-full'>
						<Carousel
							className='flex items-center justify-center'
							opts={{
								align: 'start',
								loop: true,
							}}
							plugins={[
								Autoplay({
									delay: 1000,
								}),
							]}
						>
							<CarouselContent className='flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24'>
								{TRUSTED_PARTNERS_LOGO.map(
									(logo, i) => (
										<CarouselItem
											className='basis-1/4 md:basis-1/6 lg:basis-1/8 xl:basis-1/12'
											key={1}
										>
											<img
												alt={`${logo.name} Logo`}
												className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
												height={140}
												src={logo.src}
												width={140}
											/>
										</CarouselItem>
									)
								)}
							</CarouselContent>
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
}
