'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { CAROUSEL_IMAGES, COMPANY_PROFILE } from '@/utils/const';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface ImageObject {
	id: string;
	src: string;
	alt: string;
	title?: string;
	description?: string;
	buttonText?: string;
}

export function CarouselGroup() {
	return (
		<Carousel
			opts={{
				align: 'start',
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 4000,
				}),
			]}
		>
			<CarouselContent className='space-x-0 gap-0'>
				{CAROUSEL_IMAGES.map((image, index) => (
					<CarouselItem key={index}>
						<div className='relative w-full h-full'>
							<Image
								src={image.src}
								alt={image.alt}
								className='w-full object-cover h-[calc(100svh-52px)]'
								height={900}
								width={1600}
							/>
							<div className='absolute flex items-center justify-center bottom-0 top-0 right-0 left-0 z-30 p-4 text-white'>
								<div className='absolute z-10 left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center'>
									<div className='text-center'>
										{image.title && (
											<h1 className='font-bold text-2xl md:text-5xl lg:text-7xl mb-3 md:mb-6 lg:mb-9'>
												{image.title}
											</h1>
										)}
										{image.description && (
											<p className='mb-3 md:mb-6 lg:mb-9 md:text-2xl lg:text-4xl'>
												{image.description}
											</p>
										)}
										{image.buttonText && (
											<Button
												asChild
												variant={'tertiary'}
											>
												<Link
													href={
														COMPANY_PROFILE.calendly
													}
												>
													{
														image.buttonText
													}
												</Link>
											</Button>
										)}
									</div>
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
