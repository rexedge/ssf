import Hero from '@/components/ui/hero';
import Image from 'next/image';

export default function BusinessOwner() {
	return (
		<>
			<Hero
				title={'BUSINESS OWNER INSURANCE'}
				description={`EXECUTIVE BONUS PLAN | KEY PERSON INSURANCE`}
				image={'/business-owner.png'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<div className='grid lg:grid-cols-2 gap-5 container'>
					<Image
						className='h-full w-full object-cover rounded-lg'
						height={1080}
						width={1080}
						src='/executive-2.jpg'
						alt='Types of Life Insurance'
					/>
					<div className=''>
						<h2 className=''>EXECUTIVE BONUS PLAN</h2>
						<p>
							Executive bonus plans can be a valuable tool
							for businesses seeking to attract, retain,
							and motivate key employees by offering them
							additional compensation and long-term
							benefits.
						</p>
					</div>
				</div>
				<ul className='pt-10'>
					<li>
						<span className='font-bold'>
							Employee Retention:
						</span>{' '}
						Executive bonus plans are used as a tool for
						employee retention and motivation, especially for
						key executives or high-performing employees. The
						promise of additional compensation in the form of
						life insurance premiums can incentivize top talent
						to stay with the company.
					</li>
					<li>
						<span className='font-bold'>Tax Advantages:</span>{' '}
						Executive bonus plans offer tax advantages for
						both the employer and the employee. The company
						can deduct the bonus as a business expense, while
						the employee receives life insurance coverage with
						potentially tax-free death benefits for their
						beneficiaries.
					</li>
					<li>
						<span className='font-bold'>
							Flexible Benefits:
						</span>{' '}
						Executive bonus plans allow employers to tailor
						benefits to individual employees' needs and
						preferences. This flexibility can help attract and
						retain top talent by offering personalized
						compensation packages.
					</li>
					<li>
						<span className='font-bold'>
							Supplemental Retirement Income:
						</span>{' '}
						In addition to providing life insurance coverage,
						executive bonus plans can also serve as a
						supplemental retirement income strategy. Cash
						value accumulated within the life insurance policy
						can be accessed tax-deferred or tax-free,
						providing additional financial security for key
						executives in retirement.
					</li>
				</ul>
				<div className='grid lg:grid-cols-2 gap-5 container'>
					<Image
						className='h-full w-full object-cover rounded-lg'
						height={1080}
						width={1080}
						src='/key-person-2.jpg'
						alt='Types of Life Insurance'
					/>
					<div className=''>
						<h2 className=''>KEY PERSON INSURANCE</h2>
						<p>
							Key person insurance offer unique benefits
							for businesses:
						</p>
					</div>
				</div>
				<ul className='pt-10'>
					<li>
						<span className='font-bold'>
							Financial Protection:
						</span>{' '}
						Key person insurance provides financial protection
						to a company in the event of the death or
						disability of a crucial employee, such as a key
						executive or key employee. The policy pays out a
						death benefit to the company, helping to cover the
						costs of recruiting, training, or compensating for
						the loss.
					</li>
					<li>
						<span className='font-bold'>
							Business Continuity:
						</span>{' '}
						Losing a key person can disrupt business
						operations, impact revenue, and erode client
						confidence. Key person insurance helps ensure
						continuity by providing funds to cover expenses
						during the transition period and mitigate
						financial losses.
					</li>
					<li>
						<span className='font-bold'>
							Creditworthiness:
						</span>{' '}
						Having key person insurance in place can enhance a
						company's creditworthiness in the eyes of lenders
						and investors. It demonstrates that the company is
						prepared for unexpected events and has a plan in
						place to mitigate risks.
					</li>
					<li>
						<span className='font-bold'>
							Employee Confidence:
						</span>{' '}
						Key person insurance can provide peace of mind to
						employees, knowing that the company has taken
						steps to protect its future and their livelihoods.
						This can improve morale and retention rates among
						staff.
					</li>
				</ul>
			</div>
		</>
	);
}
