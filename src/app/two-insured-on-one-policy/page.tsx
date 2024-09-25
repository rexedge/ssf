import Hero from '@/components/ui/hero';
import Image from 'next/image';

export default function TwoInsuredOnOnePolicy() {
	return (
		<>
			<Hero
				title={'Two Insured On One Policy'}
				description={``}
				image={'/two-insured-on-one-policy.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<div className='grid lg:grid-cols-2 gap-5 container'>
					<Image
						className='h-full w-full object-cover rounded-lg'
						height={1080}
						width={1080}
						src='/two-insured-on-one-2.jpg'
						alt='Types of Life Insurance'
					/>
					<div className=''>
						<h2>What is Two insured on one policy</h2>
						<p>
							&quot;Two insured on one policy&quot; allows
							two individuals to be covered under a single
							life insurance policy. This arrangement can
							be particularly advantageous for married
							couples, business partners, or even family
							members, offering convenience and potential
							cost savings.
						</p>
					</div>
				</div>

				<h2>Benefits of a Two insured on one policy</h2>
				<ul>
					<li>
						Cost-Effectiveness: Joint policies can be more
						affordable than purchasing two separate policies,
						providing significant savings on premiums.
					</li>
					<li>
						Simplified Management: With a single policy,
						there’s less paperwork, one premium to pay, and
						fewer administrative tasks, making it easier to
						manage.
					</li>
					<li>
						Flexible Coverage Options: Joint policies can be
						customized to meet the needs of both insured
						parties, whether it’s a first-to-die policy or a
						second-to-die policy.
					</li>
					<h2>Common Scenarios</h2>
					<ol>
						<li>Married Couples:</li>
						<ul>
							<li>
								Joint Life Insurance: Ideal for spouses,
								offering financial security to the
								surviving partner. A first-to-die policy
								pays out upon the first death, providing
								immediate support. A second-to-die
								policy pays out after both have passed,
								often used for estate planning.
							</li>
							<li>
								Example: John and Jane opt for a
								first-to-die policy to ensure financial
								stability for the surviving spouse,
								helping with mortgage payments and
								living expenses.
							</li>
						</ul>
						<li>Business Partners:</li>
						<ul>
							<li>
								Key Person Insurance: Protects the
								business by covering both key partners.
								In the event of one partner&apos;s
								death, the policy provides funds to
								maintain business operations and buy out
								the deceased partner&apos;s share.
							</li>
							<li>
								Example: Alex and Sam, co-owners of a
								tech startup, choose a joint key person
								policy. This ensures that if one partner
								passes away, the business can continue
								without financial strain.
							</li>
						</ul>
					</ol>
				</ul>
			</div>
		</>
	);
}
