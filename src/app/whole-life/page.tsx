import Hero from '@/components/ui/hero';

export default function WholeLife() {
	return (
		<>
			<Hero
				title={'Whole Life'}
				description={``}
				image={'/wholelife.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<h2>What is Whole Life Insurance?</h2>
				<p>
					With whole life insurance, you’re covered for as long
					as you live. No need to worry about your premiums
					increasing; they’re set for the life of your policy.
				</p>
				<p>
					In addition to a guaranteed death benefit upon your
					passing, there are living benefits you may have access
					to while living. Your cash value account can build over
					time on a tax-deferred basis.
				</p>
				<h2>Benefits of Whole Life Insurance</h2>
				<ul>
					<li>
						Lifetime Coverage: Guaranteed coverage for your
						entire life as long as premiums are paid.
					</li>
					<li>
						Fixed Premiums: Premiums remain the same
						throughout the life of the policy.
					</li>
					<li>
						Cash Value: Accumulates cash value over time that
						you can borrow against or withdraw.
					</li>
					<li>
						Tax Advantages: Cash value grows on a tax-deferred
						basis.
					</li>
					<li>
						Guaranteed Death Benefit: Provides financial
						security for your loved ones upon your passing.
					</li>
				</ul>
				<h2>Why Choose Smart Steps for Whole Life Insurance?</h2>
				<ul>
					<li>
						Personalized Service: We help you choose the right
						coverage amount based on your needs.
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
