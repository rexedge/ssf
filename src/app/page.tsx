import ContactUs from '@/components/home-page/contact-us';
import Testimonials from '@/components/home-page/testimonials';
import Button from '@/components/ui/button';
import Carousel from '@/components/ui/carousel';
import { CAROUSEL_IMAGES, COMPANY_PROFILE } from '@/utils/const';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Carousel
				images={CAROUSEL_IMAGES}
				pagination={false}
			/>
			<section className='px-10 py-20 bg-teal-100 dark:bg-teal-900'>
				<div className='text-lg font-bold italic text-center'>
					Welcome to {COMPANY_PROFILE.name} Services, your
					trusted partner in achieving financial security and
					building a prosperous future. We are dedicated to
					providing you with the knowledge, tools, and products
					necessary to navigate the complexities of the financial
					world.
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
						<h2 className='text-xl lg:text-3xl font-bold mb-5 lg:mb-10'>
							INTRODUCTION
						</h2>
						<div>
							At {COMPANY_PROFILE.name} Services, we
							understand that financial well-being is a top
							priority for individuals and families. Our
							comprehensive approach focuses on empowering
							you with the insights and strategies needed
							to make informed financial decisions. Whether
							you&apos;re seeking to protect your income,
							grow your wealth, or plan for a secure
							retirement, we&apos;re here to guide you
							every step of the way.
						</div>
					</div>
				</div>
			</section>
			<section className='px-10 py-20 bg-teal-100 dark:bg-teal-900 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
				<div className='md:col-span-2 lg:col-span-3 text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10'>
					WHY CHOOSE US
				</div>
				<div className='md:col-span-1 bg-white dark:bg-black p-5 rounded-lg mb-5 text-center'>
					<p className='font-bold text-lg uppercase mb-3'>
						Expertise and Guidance
					</p>
					Our team of financial experts brings years of industry
					experience to help you navigate the ever-changing
					financial landscape. We stay up-to-date with the latest
					trends, regulations, and strategies, ensuring that you
					receive accurate and personalized advice tailored to
					your unique needs.
				</div>
				<div className='md:col-span-1 bg-white dark:bg-black p-5 rounded-lg mb-5 text-center'>
					<p className='font-bold text-lg uppercase mb-3'>
						Comprehensive Services
					</p>
					From understanding the rules of money to protecting
					your assets and planning for the future, we cover a
					wide range of topics. Our services encompass income
					protection, tax advantages, legacy planning, and more.
					Whatever your financial goals may be, we have the
					expertise and resources to help you achieve them.
				</div>
				<div className='md:col-span-1 bg-white dark:bg-black p-5 rounded-lg mb-5 text-center'>
					<p className='font-bold text-lg uppercase mb-3'>
						Tailored Solutions
					</p>
					We recognize that every individual&apos;s financial
					situation is unique. That&apos;s why we offer
					personalized solutions that align with your specific
					needs, risk tolerance, and aspirations. Our goal is to
					create a customized roadmap that leads you towards
					financial success and peace of mind.
				</div>
			</section>
			<section className='px-10 py-20'>
				<div className='text-center text-2xl lg:text-3xl font-bold mb-5 lg:mb-10'>
					Ready to Take Control of Your Financial Future?
				</div>
				<div className='text-center flex flex-col items-center'>
					<Button
						href={COMPANY_PROFILE.calendly}
						className='mb-10 outline bg-teal-100 dark:bg-teal-900'
					>
						GET STARTED
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
			<ContactUs />
		</main>
	);
}
