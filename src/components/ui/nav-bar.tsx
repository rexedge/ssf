import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Button from './button';

export default function NavBar() {
	return (
		<Fragment>
			<div className='w-screen bg-white dark:bg-teal-800 h-fit flex justify-between items-center py-2 px-10'>
				<Link
					href='/'
					className=' shrink-0 font-bold'
				>
					<Image
						height={50}
						width={50}
						src={'/ssf.png'}
						alt=''
						className='dark:invert'
					/>
				</Link>
				<div className='lg:flex justify-center w-full hidden'>
					<Link
						className='py-2 px-4 hover:text-gray-600 hover:scale-110 transition-all'
						href={'/about'}
					>
						ABOUT
					</Link>
					<Link
						className='py-2 px-4 hover:text-gray-600 hover:scale-110 transition-all'
						href={'/products'}
					>
						PRODUCTS
					</Link>
					<Link
						className='py-2 px-4 hover:text-gray-600 hover:scale-110 transition-all'
						href={'/services'}
					>
						SERVICES
					</Link>
					<Link
						className='py-2 px-4 hover:text-gray-600 hover:scale-110 transition-all'
						href={'/contact'}
					>
						CONTACT
					</Link>
				</div>
				<Button className='shrink-0 py-2 px-4 dark:bg-teal-900 bg-teal-200 hover:bg-teal-400 dark:hover:bg-teal-700 rounded-lg cursor-pointer'>
					BOOK CONSULTATION
				</Button>
			</div>
		</Fragment>
	);
}
