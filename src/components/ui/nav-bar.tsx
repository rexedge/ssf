'use client';
import { MenuIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { COMPANY_PROFILE } from '@/utils/const';
import { Button } from './button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from './navigation-menu';
import { usePathname } from 'next/navigation';
import ListItem from './list-item';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from './dropdown-menu';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './sheet';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from './input';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './accordion';
import { Ghost } from 'lucide-react';

const LIFE_INSURANCE: {
	title: string;
	href: string;
	description: string;
}[] = [
	{
		title: 'Term Life',
		href: '/term-life',
		description:
			'Learn more about term life with or without living benefits.',
	},
	{
		title: 'Whole Life',
		href: '/whole-life',
		description: 'Learn more about whole life insurance.',
	},
	{
		title: 'Indexed Universal Life (IUL)',
		href: '/iul',
		description: 'Learn more about indexed universal life insurance.',
	},
];
const ANNUITY: {
	title: string;
	href: string;
	description: string;
}[] = [
	{
		title: 'Fixed annuities',
		href: '/annuity#fixed-annuities',
		description: 'Learn more about fixed annuities.',
	},
	{
		title: 'Fixed indexed annuities',
		href: '/annuity#fixed-indexed-annuities',
		description: 'Learn more about Fixed indexed annuities.',
	},
	{
		title: 'Variable annuities',
		href: '/annuity#variable-annuities',
		description: 'Learn more about Variable annuities.',
	},
];
const BUSINESS_OWNER: {
	title: string;
	href: string;
	description: string;
}[] = [
	{
		title: 'Executive Bonus Plan',
		href: '/business-owner#executive-bonus-plan',
		description: 'Learn more about Executive Bonus Plan.',
	},
	{
		title: 'Key Person Insurance',
		href: '/business-owner#key-person-insurance',
		description: 'Learn more about Key Person Insurance.',
	},
];
const SERVICES_LIST: {
	title: string;
	href: string;
	description: string;
}[] = [
	{
		title: 'Retirement Plan',
		href: '/annuity',
		description: 'Learn more about our retirement plan service.',
	},
	{
		title: 'Business Owner',
		href: '/business-owner',
		description: 'Learn more about our business owner service',
	},
	{
		title: 'College Savings',
		href: '/college-savings',
		description: 'Learn more about our college savings plan service',
	},
	{
		title: 'Estate Planning',
		href: '/estate-planning',
		description: 'Learn more about our estate planning service',
	},
	// {
	// 	title: 'Long Term Plan',
	// 	href: '/long-term-plan',
	// 	description: 'Learn more about our long term plan service',
	// },
	// {
	// 	title: 'Debt Relief',
	// 	href: '/debt-relief',
	// 	description: 'Learn more about our debt relief service',
	// },
];

export default function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLButtonElement>(null);
	const pathName = usePathname();

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
					<div className='flex items-center gap-3'>
						<Button
							asChild
							variant={
								pathName === '/' ? 'ghost' : 'outline'
							}
						>
							<Link href={'/'}>HOME</Link>
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant={'outline'}>
									PRODUCTS
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='w-full'>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>
										<Link
											className='w-full'
											href={'/life-insurance'}
										>
											Life Insurance
										</Link>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											{LIFE_INSURANCE.map(
												(a, b) => (
													<DropdownMenuItem
														key={b}
														asChild
													>
														<Link
															href={
																a.href
															}
														>
															{
																a.title
															}
														</Link>
													</DropdownMenuItem>
												)
											)}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>
										<Link
											href={'/annuity'}
											className='w-full'
										>
											Annuity
										</Link>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											{ANNUITY.map((a, b) => (
												<DropdownMenuItem
													key={b}
													asChild
												>
													<Link
														href={
															a.href
														}
													>
														{a.title}
													</Link>
												</DropdownMenuItem>
											))}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>
										<Link
											className='w-full'
											href={'/business-owner'}
										>
											Business Owner
										</Link>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											{BUSINESS_OWNER.map(
												(a, b) => (
													<DropdownMenuItem
														key={b}
														asChild
													>
														<Link
															href={
																a.href
															}
														>
															{
																a.title
															}
														</Link>
													</DropdownMenuItem>
												)
											)}
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
								<DropdownMenuItem>
									<Link
										className='w-full'
										href={'/final-expense'}
									>
										Final Expense
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link
										className='w-full'
										href={'/mortgage-protection'}
									>
										Mortgage Protection
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link
										className='w-full'
										href={'/college-savings'}
									>
										Account 7702(b)
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant={'outline'}>
									SERVICES
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='w-full'>
								{SERVICES_LIST.map((a, b) => (
									<DropdownMenuItem key={b}>
										<Link
											className='w-full'
											href={a.href}
										>
											{a.title}
										</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
						<Button
							variant={'outline'}
							asChild
						>
							<Link href={'/resources'}>RESOURCES</Link>
						</Button>
						<Button
							variant={'outline'}
							asChild
						>
							<Link href={'/contact'}>CONTACT</Link>
						</Button>
						<Button
							variant={'outline'}
							asChild
						>
							<Link href={'/about'}>ABOUT US</Link>
						</Button>
						<Button
							variant={'outline'}
							asChild
						>
							<Link href={'/our-process'}>
								OUR PROCESS
							</Link>
						</Button>
					</div>
				</div>
				<Button
					variant={'tertiary'}
					className='hidden lg:block'
					asChild
				>
					<Link href={'/become-an-agent'}>Become an agent</Link>
				</Button>
				<Sheet>
					<SheetTrigger
						asChild
						className='lg:hidden'
					>
						<MenuIcon className='h-4 w-4' />
					</SheetTrigger>
					<SheetContent className='h-[100svh] overflow-scroll no-scrollbar'>
						<SheetHeader>
							<SheetTitle className='flex items-center justify-center'>
								<SheetClose asChild>
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
								</SheetClose>
							</SheetTitle>
							<SheetDescription>
								Smart Steps Financial Solutions
							</SheetDescription>
						</SheetHeader>
						<div className='grid py-4'>
							<SheetClose
								asChild
								className='mb-6'
							>
								<Link href={'/'}>HOME</Link>
							</SheetClose>
							<Accordion
								type='single'
								collapsible
								className='w-full mb-3'
							>
								<AccordionItem
									className=' border-0 '
									value='item-1'
								>
									<AccordionTrigger className='font-normal h-10'>
										PRODUCTS
									</AccordionTrigger>
									<AccordionContent className='grid pl-2'>
										<Accordion
											type='single'
											collapsible
											className='w-full mb-3 grid'
										>
											<AccordionItem
												className='border-0'
												value='life-insurance'
											>
												<AccordionTrigger className='font-normal h-10'>
													LIFE INSURANCE
												</AccordionTrigger>
												<AccordionContent className='grid pl-2 gap-2'>
													{LIFE_INSURANCE.map(
														(
															{
																href,
																title,
															},
															k
														) => (
															<SheetClose
																asChild
																key={
																	k
																}
															>
																<Link
																	className='uppercase'
																	href={
																		href
																	}
																>
																	{
																		title
																	}
																</Link>
															</SheetClose>
														)
													)}
												</AccordionContent>
											</AccordionItem>
											<AccordionItem
												className='border-0'
												value='annuity'
											>
												<AccordionTrigger className='font-normal h-10'>
													ANNUITY
												</AccordionTrigger>
												<AccordionContent className='grid pl-2 gap-2'>
													{ANNUITY.map(
														(
															{
																href,
																title,
															},
															k
														) => (
															<SheetClose
																asChild
																key={
																	k
																}
															>
																<Link
																	className='uppercase'
																	href={
																		href
																	}
																>
																	{
																		title
																	}
																</Link>
															</SheetClose>
														)
													)}
												</AccordionContent>
											</AccordionItem>
											<AccordionItem
												className='border-0 mb-3'
												value='business-owner'
											>
												<AccordionTrigger className='font-normal h-10'>
													BUSINESS OWNER
												</AccordionTrigger>
												<AccordionContent className='grid pl-2 gap-2'>
													{BUSINESS_OWNER.map(
														(
															{
																href,
																title,
															},
															k
														) => (
															<SheetClose
																asChild
																key={
																	k
																}
															>
																<Link
																	className='uppercase'
																	href={
																		href
																	}
																>
																	{
																		title
																	}
																</Link>
															</SheetClose>
														)
													)}
												</AccordionContent>
											</AccordionItem>
											<SheetClose
												asChild
												className='mb-5'
											>
												<Link
													href={
														'/final-expense'
													}
												>
													FINAL EXPENSE
												</Link>
											</SheetClose>
											<SheetClose
												asChild
												className='mb-5'
											>
												<Link
													href={
														'/mortgage-protection'
													}
												>
													MORTGAGE
													PROTECTION
												</Link>
											</SheetClose>
											<SheetClose
												asChild
												className='mb-5'
											>
												<Link
													href={
														'/college-savings'
													}
												>
													ACCOUNT 7702(b)
												</Link>
											</SheetClose>
										</Accordion>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem
									className=' border-0'
									value='item-2'
								>
									<AccordionTrigger className='font-normal'>
										SERVICES
									</AccordionTrigger>
									<AccordionContent className='grid gap-5 pl-5'>
										{SERVICES_LIST.map(
											({ href, title }, k) => (
												<SheetClose
													asChild
													key={k}
												>
													<Link
														className='uppercase'
														href={
															href
														}
													>
														{title}
													</Link>
												</SheetClose>
											)
										)}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
							<SheetClose
								asChild
								className=' mb-6'
							>
								<Link href={'/contact'}>CONTACT</Link>
							</SheetClose>
							<SheetClose
								asChild
								className=' mb-6'
							>
								<Link href={'/resources'}>
									RESOURCES
								</Link>
							</SheetClose>
							<SheetClose
								asChild
								className='mb-6'
							>
								<Link href={'/about'}>ABOUT US</Link>
							</SheetClose>
							<SheetClose
								asChild
								className='mb-6'
							>
								<Link href={'/our-process'}>
									OUR PROCESS
								</Link>
							</SheetClose>
							<SheetClose
								asChild
								className=' mb-6'
							>
								<Link href={'/become-an-agent'}>
									BECOME AN AGENT
								</Link>
							</SheetClose>
							<SheetClose
								asChild
								className=' mb-6'
							>
								<Link href={COMPANY_PROFILE.calendly}>
									BOOK CONSULTATION
								</Link>
							</SheetClose>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</Fragment>
	);
}
