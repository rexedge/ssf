import Hero from '@/components/ui/hero';
import { COMPANY_PROFILE } from '@/utils/const';
import Image from 'next/image';
import Link from 'next/link';

export default function LifeInsurance() {
	return (
		<>
			<Hero
				title={'Life Insurance'}
				description={`Protect What Matters Most with Life Insurance`}
				image={'/life-insurance.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<p>
					Life is full of uncertainties, but securing your
					family&apos;s financial future doesn&apos;t have to be
					one of them. At Smart Steps Financial Solutions, we
					understand the importance of providing peace of mind
					and protection for your loved ones in the face of
					life&apos;s uncertainties. That&apos;s why we offer a
					comprehensive range of life insurance options designed
					to meet your unique needs and circumstances.
				</p>
				<h2>Why Life Insurance Matters</h2>
				<p>
					At Smart Steps Financial, we understand the paramount
					importance of safeguarding your loved ones&apos;
					financial future.
					<br />
					Life insurance from {COMPANY_PROFILE.name} can help
					provide financial protection for your loved ones when
					they may need it most. For more information on life
					insurance options, give us a call at{' '}
					{COMPANY_PROFILE.phone}, or get a free assessment &
					quote today.
				</p>

				<section
					id='types'
					className='grid grid-cols-2 gap-5'
				>
					<h2 className='lg:col-span-2 '>
						Types of Life Insurance
					</h2>
					<Image
						className='h-full w-full object-cover rounded-lg'
						height={1080}
						width={1080}
						src='/life-insurance.webp'
						alt='Types of Life Insurance'
					/>
					<div className=''>
						<h3>
							<Link href='/term-life'>
								Term Life Insurance
							</Link>
						</h3>
						<p>
							Affordable coverage for a specific period.
							Ideal for temporary needs like mortgage
							payments or children’s education.
						</p>
						<h3>
							<Link href='/whole-life'>
								Whole Life Insurance
							</Link>
						</h3>
						<p>
							Lifetime coverage with a cash value component
							that grows over time. Perfect for long-term
							financial planning.
						</p>
						<h3>
							<Link href='/iul'>
								Universal Life Insurance
							</Link>
						</h3>
						<p>
							Flexible premium options with lifetime
							coverage. Combines the benefits of term and
							whole life insurance.
						</p>
					</div>
				</section>

				<h2>Benefits of Life Insurance</h2>
				<ul>
					<li>
						Financial Security: Ensure your family’s financial
						stability in case of unexpected events.
					</li>
					<li>
						Debt Protection: Cover outstanding debts and
						prevent financial burden on your loved ones.
					</li>
					<li>
						Wealth Transfer: Facilitate smooth transfer of
						assets to beneficiaries.
					</li>
					<li>
						Peace of Mind: Enjoy the comfort of knowing your
						loved ones are protected.
					</li>
				</ul>
			</div>
		</>
	);
}
