import React from 'react';

const Footer = () => (
	<footer className='bg-teal-800 text-white py-8'>
		<div className='container mx-auto px-4'>
			<div className='flex flex-wrap justify-between'>
				<div className='w-full md:w-1/4 mb-8 md:mb-0'>
					<h2 className='text-xl font-semibold mb-4'>
						Company Name
					</h2>
					<p className='text-gray-400'>
						123 Street, City, State ZIP
					</p>
					<p className='text-gray-400'>Phone: (123) 456-7890</p>
					<p className='text-gray-400'>
						Email: info@example.com
					</p>
				</div>
				<div className='w-full md:w-1/4 mb-8 md:mb-0'>
					<h2 className='text-xl font-semibold mb-4'>
						Quick Links
					</h2>
					<ul className='space-y-2'>
						<li>
							<a
								href='/'
								className='text-gray-400 hover:text-gray-300'
							>
								Home
							</a>
						</li>
						<li>
							<a
								href='/services'
								className='text-gray-400 hover:text-gray-300'
							>
								Services
							</a>
						</li>
						<li>
							<a
								href='/products'
								className='text-gray-400 hover:text-gray-300'
							>
								Products
							</a>
						</li>
						<li>
							<a
								href='/about'
								className='text-gray-400 hover:text-gray-300'
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href='/contact'
								className='text-gray-400 hover:text-gray-300'
							>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<div className='w-full md:w-1/4 mb-8 md:mb-0'>
					<h2 className='text-xl font-semibold mb-4'>
						Follow Us
					</h2>
				</div>
				<div className='w-full md:w-1/4 mb-8 md:mb-0'>
					<h2 className='text-xl font-semibold mb-4'>
						Follow Us
					</h2>
				</div>
			</div>
			<hr className='my-6 border-gray-100' />
			<div className='text-center'>
				<p className='text-gray-400'>
					&copy; {new Date().getFullYear()} Company Name. All
					rights reserved.
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
