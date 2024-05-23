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
		title: 'IUL',
		href: '/iul',
		description: 'Learn more about indexed universal life insurance.',
	},
	{
		title: 'Final Expense',
		href: '/final-expense',
		description: 'Learn more about the final expense plan.',
	},
	{
		title: 'Mortgage Protection',
		href: '/mortgage-protection',
		description: 'Learn more about mortgage protection insurance.',
	},
	{
		title: 'Mortgage Protection',
		href: '/mortgage-protection',
		description: 'Learn more about mortgage protection insurance.',
	},
];
const SERVICES_LIST: {
	title: string;
	href: string;
	description: string;
}[] = [
	{
		title: 'Retirement Plan',
		href: '/retirement-plan',
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
	{
		title: 'Long Term Plan',
		href: '/long-term-plan',
		description: 'Learn more about our long term plan service',
	},
	{
		title: 'Debt Relief',
		href: '/debt-relief',
		description: 'Learn more about our debt relief service',
	},
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
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link
									href='/about'
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										active={pathName?.startsWith(
											'/about'
										)}
									>
										ABOUT
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									LIFE INSURANCE
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
										{LIFE_INSURANCE.map(
											(component) => (
												<ListItem
													key={
														component.title
													}
													title={
														component.title
													}
													href={
														component.href
													}
												>
													{
														component.description
													}
												</ListItem>
											)
										)}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									SERVICES
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
										{SERVICES_LIST.map(
											(component) => (
												<ListItem
													key={
														component.title
													}
													title={
														component.title
													}
													href={
														component.href
													}
												>
													{
														component.description
													}
												</ListItem>
											)
										)}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href='/contact'
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										active={pathName?.startsWith(
											'/contact'
										)}
									>
										CONTACT
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link
									href='/resources'
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={navigationMenuTriggerStyle()}
										active={pathName?.startsWith(
											'/resources'
										)}
									>
										RESOURCES
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
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
							<SheetClose
								asChild
								className='mb-4'
							>
								<Link href={'/about'}>ABOUT</Link>
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
										LIFE INSURANCE
									</AccordionTrigger>
									<AccordionContent className='grid pl-5'>
										{LIFE_INSURANCE.map(
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
								<AccordionItem
									className=' border-0'
									value='item-2'
								>
									<AccordionTrigger className='font-normal'>
										SERVICES
									</AccordionTrigger>
									<AccordionContent className='grid pl-5'>
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
