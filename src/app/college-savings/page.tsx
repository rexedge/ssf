import Hero from '@/components/ui/hero';

export default function CollegeSavings() {
	return (
		<>
			<Hero
				title={'College Savings Plan'}
				description={`Reliable college saving plan for your kids to secure their loan free education.`}
				image={'/college-savings-plan.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<h1 className='text-2xl '>COLLEGE SAVINGS PLAN</h1>
				<p>
					Account 7702(b) can be a secured and reliable college
					saving plan for your kids to secure their loan free
					education and financial future. It has numerous
					benefits compare to Account 529 plans or Coverdell
					Education Savings Accounts
				</p>
				<p>
					These are some of the potential benefits of Account
					7702(b) for your kid's college saving plan:
				</p>
				<ul>
					<li>
						<span className='font-bold'>
							Guaranteed Growth:
						</span>{' '}
						7702(b) account offer a guaranteed minimum
						interest rate on the cash value component. This
						can provide stability and predictability in the
						growth of college savings compare to similar
						account, ensuring that the cash value will
						continue to accumulate even in unfavorable market
						conditions.
					</li>
					<li>
						<span className='font-bold'>
							No Contribution Limits:
						</span>{' '}
						Unlike some other college savings vehicles, such
						as 529 plans, there are no contribution limits on
						7702(b) account. Policyholders can contribute as
						much as they'd like to the accounts.
					</li>
					<li>
						<span className='font-bold'>
							No Income Restrictions:
						</span>{' '}
						Unlike some other college savings vehicles, such
						as Roth IRAs or Coverdell ESAs, there are no
						income restrictions for contributing to a 7702(b)
						account. This makes it a viable option for
						higher-income families who may be ineligible for
						certain tax-advantaged account.
					</li>
					<li>
						<span className='font-bold'>
							No Penalties for Non-Qualified Withdrawals:
						</span>{' '}
						While qualified withdrawals from other college
						savings accounts are typically tax-free and
						penalty-free when used for qualified education
						expenses, non-qualified withdrawals are subject to
						income tax and penalties. With a 7702(b) policy,
						withdrawals and loans can be taken at any time for
						any purpose without incurring penalties.
					</li>
					<li>
						<span className='font-bold'>
							No Age Restrictions:
						</span>{' '}
						Unlike some other college savings accounts, which
						may have age restrictions on contributions or
						withdrawals, there are typically no age
						restrictions associated with 7702(b) policies.
						This flexibility allows families to continue
						saving for college expenses even if the
						beneficiary is older or closer to college age.
					</li>
				</ul>
			</div>
		</>
	);
}
