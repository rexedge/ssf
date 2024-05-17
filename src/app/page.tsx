import ContactUs from '@/components/home-page/contact-us';
import Testimonials from '@/components/home-page/testimonials';
import { CarouselGroup } from '@/components/shared/carousel';
import TrustedPartnersCarousel from '@/components/shared/trusted-partners-carousel';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { COMPANY_PROFILE, PARTNERS, WHY_CHOOSE_US } from '@/utils/const';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<CarouselGroup />
			<section className='px-5 md:px-10 py-10 md:py-20 bg-primary dark:bg-primary text-primary-foreground'>
				<div className='text-lg font-bold italic text-center w-full mx-auto max-w-3xl'>
					Welcome to{' '}
					<span className='text-tertiary font-bold'>
						{COMPANY_PROFILE.name}
					</span>{' '}
					Services, your trusted partner in achieving financial
					security and building a prosperous future. We are
					dedicated to providing you with the knowledge, tools,
					and products necessary to navigate the complexities of
					the financial world.
				</div>
			</section>
			<section className='px-10 py-20 lg:flex gap-10'>
				<div className='lg:w-1/2 overflow-hidden rounded-xl mb-10'>
					<Image
						src='/aboutus.jpg'
						height={500}
						width={500}
						alt=''
						className=' object-cover object-center h-full w-full'
					/>
				</div>
				<div className='lg:w-1/2 flex items-center justify-center'>
					<div className=''>
						<h2 className='text-xl lg:text-3xl font-bold mb-5 lg:mb-10 text-tertiary'>
							INTRODUCTION
						</h2>
						<div>
							At{' '}
							<span className='text-tertiary font-bold'>
								{COMPANY_PROFILE.name}
							</span>{' '}
							Services, we understand that financial
							well-being is a top priority for individuals
							and families. Our comprehensive approach
							focuses on empowering you with the insights
							and strategies needed to make informed
							financial decisions. Whether you&apos;re
							seeking to protect your income, grow your
							wealth, or plan for a secure retirement,
							we&apos;re here to guide you every step of
							the way.
						</div>
					</div>
				</div>
			</section>
			<section className='w-full py-12 md:py-24 lg:py-32 bg-primary'>
				<div className='container px-4 md:px-6'>
					<div className='grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
						<div className='flex flex-col justify-center space-y-4'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground'>
									Why Choose Us
								</h2>
								<div className='grid gap-6'>
									{WHY_CHOOSE_US.map((wcu, k) => (
										<div key={k}>
											<h3 className='text-xl font-bold text-tertiary'>
												{wcu.title}
											</h3>
											<p className=' text-tertiary-foreground'>
												{wcu.description}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<img
							alt='Image'
							className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
							height='310'
							src='/about.jpg'
							width='550'
						/>
					</div>
				</div>
			</section>
			<TrustedPartnersCarousel />
			<section className='px-10 py-20 bg-primary text-primary-foreground'>
				<div className='text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10'>
					Ready to Take Control of Your Financial Future?
				</div>
				<div className='text-center flex flex-col items-center'>
					<Button
						variant={'tertiary'}
						asChild
					>
						<Link href={COMPANY_PROFILE.calendly}>
							GET STARTED
						</Link>
					</Button>
					<div className='text-sm max-w-[500px] mt-10'>
						Discover how our expertise and products can help
						you achieve financial security, protect your
						income, and build a lasting legacy. Take the first
						step today by getting in touch with our team.
						We&apos;re excited to embark on this financial
						journey with you!
					</div>
				</div>
			</section>
			<Testimonials />
			<section className='bg-primary'>
				<div className='container mx-auto p-5 md:p-10'>
					<div className='mb-10 text-center text-tertiary text-3xl md:text-4xl font-bold'>
						FINANCIAL SERVICES <br /> WE PROVIDE
					</div>
					<div className='grid gap-10 items-center justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{PARTNERS.map((partner, id) => (
							<Link
								href={partner.href}
								key={id}
								className='flex flex-col gap-3 items-center justify-center text-white w-full mx-auto'
							>
								<div className='mb-6 lg:mb-0 mx-auto flex justify-center items-center aspect-square w-full bg-white rounded-full border-4 border-tertiary overflow-hidden'>
									<Image
										src={partner.image}
										height={192}
										width={192}
										alt={partner.name}
										className='h-auto w-full object-center object-cover'
									/>
								</div>
								<div className='font-bold uppercase text-lg text-center'>
									{partner.name}
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
			<ContactUs />
		</main>
	);
}
