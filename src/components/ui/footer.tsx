import { COMPANY_PROFILE } from '@/utils/const';
import FormatAddress from '@/utils/format-address';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => (
	<footer className='bg-primary-foreground text-primary py-8 border-t'>
		<div className='mx-auto px-10'>
			<div className='flex flex-wrap justify-between'>
				<div className='w-full md:w-1/2 lg:w-2/5 mb-8 lg:mb-0'>
					<Link
						href={'/'}
						className='text-lg font-semibold'
					>
						<Image
							height={50}
							width={50}
							alt=''
							src={'/standalone.png'}
							className='dark:invert'
						/>
					</Link>
					<div className='my-3'>
						<FormatAddress
							address={COMPANY_PROFILE.address}
						/>
					</div>
					<p className='mb-3'>Phone: {COMPANY_PROFILE.phone}</p>
					<p className=''>Email: {COMPANY_PROFILE.email}</p>
				</div>
				<div className='w-full md:w-1/2 lg:w-1/5 mb-8 md:mb-0'>
					<h2 className='text-lg font-semibold mb-4'>
						Quick Links
					</h2>
					<ul className='space-y-2'>
						<li>
							<Link
								href='/'
								className=' hover:text-gray-300'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/services'
								className=' hover:text-gray-300'
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href='/products'
								className=' hover:text-gray-300'
							>
								Products
							</Link>
						</li>
						<li>
							<Link
								href='/about'
								className=' hover:text-gray-300'
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className=' hover:text-gray-300'
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
				<div className='w-full md:w-1/2 lg:w-1/5 mb-8 md:mb-0'>
					<h2 className='text-lg font-semibold mb-4'>
						Follow Us
					</h2>
					<ul className='space-y-2'>
						<li>
							<a
								href='https://www.facebook.com/profile.php?id=61557891714191'
								className=' hover:text-tertiary items-center flex gap-2'
							>
								<Facebook className='h-5 w-5' />
								Facebook{' '}
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/smartsteps_solution/'
								className=' hover:text-tertiary items-center flex gap-2'
							>
								<Instagram className='h-5 w-5' />
								Instagram{' '}
							</a>
						</li>
					</ul>
				</div>
			</div>
			<hr className='my-6 border-gray-200' />
			<div className='text-center'>
				<p className=''>
					&copy; {new Date().getFullYear()} Smart Steps Financial
					Solutions. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
