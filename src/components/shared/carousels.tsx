'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './button';
import { COMPANY_PROFILE } from '@/utils/const';

interface ImageObject {
	id: string;
	src: string;
	alt: string;
	title?: string;
	description?: string;
	buttonText?: string;
}

interface Props {
	images: ImageObject[];
	nav?: boolean;
	pagination?: boolean;
}

const slideVariants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? '100%' : '-100%',
			opacity: 0,
		};
	},
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			x: direction > 0 ? '-100%' : '100%',
			opacity: 0,
		};
	},
};

const Carousel = ({ images, nav = false, pagination = true }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDirection(1);
			setCurrentIndex((currentIndex + 1) % images.length);
		}, 5000);

		return () => clearTimeout(timeoutId);
	}, [currentIndex, images.length]);

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((currentIndex + 1) % images.length);
	};
	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);
	};

	const paginationItems = images.map((_, index) => (
		<div
			key={index}
			className={`h-1 md:h-2 lg:h3 w-5 md:w-8 lg:w-12 mx-1 z-20 cursor-pointer rounded-full transition duration-300 ${
				index === currentIndex
					? 'bg-black dark:bg-white'
					: 'bg-white dark:bg-primary/70'
			}`}
			onClick={() => {
				setDirection(index > currentIndex ? 1 : -1);
				setCurrentIndex(index);
			}}
		></div>
	));

	return (
		<div className='relative w-full h-52 md:h-80 lg:h-screen'>
			{/* overlay */}
			{nav && (
				<>
					<div
						className='absolute top-0 left-0 z-10 flex items-center justify-center w-8 h-full bg-primary/70 dark:text-white transition duration-300 bg-white dark:bg-primary/70 bg-opacity-70 hover:bg-opacity-90 cursor-pointer'
						onClick={handlePrev}
					>
						<svg
							className='w-6 h-6'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M15 18l-6-6 6-6' />
						</svg>
					</div>
					<div
						className='absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-full bg-primary/70 dark:text-white transition duration-300 bg-white dark:bg-primary/70 bg-opacity-70 hover:bg-opacity-90 cursor-pointer'
						onClick={handleNext}
					>
						<svg
							className='w-6 h-6'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M9 18l6-6-6-6' />
						</svg>
					</div>
				</>
			)}
			{pagination && (
				<div className='flex pb-4 md:pb-10 justify-center absolute bottom-0 left-0 right-0'>
					{paginationItems}
				</div>
			)}
		</div>
	);
};

export default Carousel;
