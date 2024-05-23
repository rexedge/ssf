import React from 'react';
import Image from 'next/image';
import { COMPANY_PROFILE } from '@/utils/const';
import { Button } from './button';
import Link from 'next/link';

interface HeroSectionProps {
	title: string;
	description: string;
	image: string;
}

const Hero: React.FC<HeroSectionProps> = ({ title, description, image }) => {
	return (
		<div className='relative bg-gray-900 text-white pb-16 min-h-[100svh] lg:min-h-[50svh]'>
			<div className='absolute inset-0 w-full h-full'>
				<Image
					src={image}
					alt='Hero Image'
					height={1080}
					width={1080}
					className=' object-cover object-top w-full h-full'
				/>
				<div className='absolute inset-0 bg-black opacity-50' />
			</div>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4'>
				<h1 className='text-4xl font-bold mb-2'>{title}</h1>
				<p className='text-lg mb-8 mx-auto max-w-3xl'>
					{description}
				</p>
				<Button asChild>
					<Link href={COMPANY_PROFILE.calendly}>
						Get Started
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Hero;
