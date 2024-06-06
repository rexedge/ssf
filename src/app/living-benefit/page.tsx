import Hero from '@/components/ui/hero';
import { COMPANY_PROFILE, PARTNERS } from '@/utils/const';
import React from 'react';

export default function LivingBenefit() {
	return (
		<>
			<Hero
				title={'Life Insurance With Living Benefit'}
				description={``}
				image={'/living-benefit.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<h2>What is Living Benefits Life Insurance?</h2>
				<p>
					Living Benefits life insurance represents a modern
					twist on life insurance coverage. A policy featuring
					living benefits riders (also known as accelerated
					benefit riders, or ABRs) will grant “early access” to
					the policy&apos;s death benefit while the insured party
					is still alive if they are to suffer any of the
					triggering conditions contained in that policy&apos;s
					living benefits riders.
				</p>
				<h2>Benefits of Living Benefits Life Insurance</h2>
				<ul>
					<li>
						Early Access to Benefits: Receive a portion of the
						death benefit early if diagnosed with a critical,
						chronic, or terminal illness.
					</li>
					<li>
						Financial Flexibility: Use the funds to cover
						medical expenses, long-term care, or other
						financial needs during challenging times.
					</li>
					<li>
						Peace of Mind: Provides additional security
						knowing you have financial support if you face
						serious health issues.
					</li>
					<li>
						No Additional Cost: Many living benefits riders
						are included at no extra cost with the policy.
					</li>
				</ul>
				<h2>How Living Benefits Life Insurance Works</h2>
				<p>
					When a qualifying health event happens under an active
					policy, a Living Benefits policy allows the insured
					individual to access the death benefit early, at a
					reduced rate. The amount of this reduction is
					determined by the severity of the illness or injury.
					The greater the impact on the insured&apos;s future
					life expectancy, the higher the payout will be for a
					given portion of the death benefit.
				</p>
				<p>
					For instance, a client with a $500,000 Term policy
					diagnosed with a severe, life-threatening cancer might
					be offered $400,000 for accelerating the entire
					$500,000 policy. Conversely, a client who has a minor
					heart attack with a good prognosis might only be
					offered $100,000 for the full $500,000 acceleration.
					Ultimately, it is up to the client to decide whether to
					accept the offer and receive the money or keep the full
					death benefit intact. In many scenarios, clients can
					choose a partial acceleration, receiving some funds
					while preserving a portion of the death benefit for the
					future.
				</p>
				<h2>
					Why Choose{' '}
					<span className='text-tertiary font-bold'>
						{COMPANY_PROFILE.name}
					</span>{' '}
					for Living Benefits Life Insurance?
				</h2>
				<ul>
					<li>
						Personalized Service: We help you choose the right
						coverage and riders based on your needs.
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
				<h2>What is Covered by Living Benefits?</h2>
				<p>
					Up to 18 Triggering Health Events
					<br />
					Living Benefits policies can vary significantly between
					insurance providers and products, so it&apos;s crucial
					to understand which riders are included in any policy
					you are considering and which conditions qualify for a
					Living Benefits claim. The best Living Benefits
					products offer all of the following Accelerated Benefit
					Riders (ABRs) and associated triggers at no additional
					premium cost:
				</p>
				<ul>
					<li>
						Terminal Illness: Expected lifespan of 1-2 years.
					</li>
					<li>
						Chronic Illness: Inability to perform 2 of 6
						activities of daily living or severe cognitive
						impairment.
					</li>
					<li>
						Critical Illness: Coverage for conditions such as
						cancer, heart attack, stroke, and more.
					</li>
					<li>
						Critical Injury: Coverage for severe conditions
						including paralysis, coma, major burns, and severe
						brain injury.
					</li>
				</ul>
			</div>
		</>
	);
}
