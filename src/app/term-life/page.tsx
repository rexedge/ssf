import Hero from '@/components/ui/hero';
import Image from 'next/image';

export default function TermLife() {
	return (
		<>
			<Hero
				title={'Term Life Insurance'}
				description={``}
				image={'/termlife.webp'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<div className='grid grid-cols-2 gap-5 container mb-10'>
					<Image
						className='h-full w-full object-cover rounded-lg'
						height={1080}
						width={1080}
						src='/term-life-2.png'
						alt='Types of Life Insurance'
					/>
					<div className=''>
						<h2>What is Term Life Insurance?</h2>
						<p>
							Term life insurance can be an affordable way
							to provide some financial protection for an
							isolated period of time. Term life insurance
							coverage is what it sounds like: life
							insurance for a specified policy term. This
							coverage allows you to choose a term of years
							up front, usually ranging from 10-30 years.
						</p>
					</div>
				</div>
				<p>
					If you die while the policy is in use, the insurance
					company pays death benefits to your named
					beneficiaries.
				</p>
				<h2>Benefits of Term Life Insurance</h2>
				<ul>
					<li>
						Affordability: Typically lower premiums compared
						to whole life insurance.
					</li>
					<li>Simplicity: Easy to understand and manage.</li>
					<li>
						Flexibility: Choose a term length that fits your
						financial goals and obligations.
					</li>
					<li>
						Peace of Mind: Provides financial protection for
						your loved ones during the policy term.
					</li>
				</ul>

				<h2>Why Choose Smart Steps for Term Life Insurance?</h2>
				<ul>
					<li>
						Personalized Service: We help you choose the right
						term and coverage amount based on your needs.
					</li>
					<li>
						Expert Guidance: Our experienced professionals
						provide knowledgeable advice throughout the
						process.
					</li>
					<li>
						Competitive Rates: We offer affordable premiums
						without compromising on coverage quality.
					</li>
					<li>
						Client Support: Ongoing support to manage your
						policy and make adjustments as needed.
					</li>
				</ul>
			</div>
		</>
	);
}
