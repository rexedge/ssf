'use client';
import { MenuIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { COMPANY_PROFILE } from '@/utils/const';
import { Button } from './button';

export default function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLButtonElement>(null);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const handleOutsideClick = (event: MouseEvent) => {
		if (isMenuOpen === false) {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setMenuOpen(false);
			}
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<Fragment>
			<div className='w-screen bg-primary/60 dark:bg-primary-foreground h-fit flex justify-between items-center py-2 px-4 md:px-10'>
				<Link
					href='/'
					className='shrink-0 font-bold'
				>
					<Image
						height={50}
						width={50}
						src={'/standalone.png'}
						alt=''
						className='dark:invert'
					/>
				</Link>
				<div className='lg:flex justify-center w-full hidden'>
					<Link
						className='py-2 px-4 hover:text-tertiary text-primary-foreground dark:hover:bg-primary/20 hover:scale-105 transition-all duration-200'
						href={'/about'}
					>
						ABOUT
					</Link>
					<Link
						className='py-2 px-4 hover:text-tertiary text-primary-foreground dark:hover:bg-primary/20 hover:scale-105 transition-all duration-200'
						href={'/products'}
					>
						PRODUCTS
					</Link>
					<Link
						className='py-2 px-4 hover:text-tertiary text-primary-foreground dark:hover:bg-primary/20 hover:scale-105 transition-all duration-200'
						href={'/services'}
					>
						SERVICES
					</Link>
					<Link
						className='py-2 px-4 hover:text-tertiary text-primary-foreground dark:hover:bg-primary/20 hover:scale-105 transition-all duration-200'
						href={'/contact'}
					>
						CONTACT
					</Link>
				</div>
				<Button
					variant={'tertiary'}
					className='hidden lg:block'
					asChild
				>
					<Link href={COMPANY_PROFILE.calendly}>
						Become an agent
					</Link>
				</Button>
				<button
					className='shrink-0 py-2 px-4 dark:bg-primary bg-primary/20 hover:bg-primary/40 dark:hover:bg-primary/70 rounded-lg cursor-pointer lg:hidden relative'
					onClick={toggleMenu}
					ref={menuRef}
				>
					{/* {isMenuOpen ? (
						<XIcon className='h-6 w-6' />
					) : ( */}
					<MenuIcon className='h-6 w-6' />
					{/* )} */}
				</button>
			</div>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className={`relative top-0 left-0 bottom-0 right-0 z-[2000] overflow-hidden`}
						initial={{ opacity: 0, y: -1000 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -1000 }}
						transition={{ duration: 0.3 }}
					>
						<div className='bg-white dark:bg-primary-foreground py-2 px-4 flex flex-col gap-5 items-center w-screen h-screen'>
							<Link
								className='py-2 px-4 hover:text-primary-foreground dark:hover:bg-primary/20 hover:scale-110 transition-all'
								href={'/about'}
							>
								ABOUT
							</Link>
							<Link
								className='py-2 px-4 hover:text-primary-foreground dark:hover:bg-primary/20 hover:scale-110 transition-all'
								href={'/products'}
							>
								PRODUCTS
							</Link>
							<Link
								className='py-2 px-4 hover:text-primary-foreground dark:hover:bg-primary/20 hover:scale-110 transition-all'
								href={'/services'}
							>
								SERVICES
							</Link>
							<Link
								className='py-2 px-4 hover:text-primary-foreground dark:hover:bg-primary/20 hover:scale-110 transition-all'
								href={'/contact'}
							>
								CONTACT
							</Link>
							<div className='grid gap-5'>
								<Button asChild>
									<Link
										href={
											COMPANY_PROFILE.calendly
										}
									>
										BOOK CONSULTATION
									</Link>
								</Button>
								<Button
									variant={'tertiary'}
									asChild
								>
									<Link
										href={
											COMPANY_PROFILE.calendly
										}
									>
										Become an agent
									</Link>
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Fragment>
	);
}
