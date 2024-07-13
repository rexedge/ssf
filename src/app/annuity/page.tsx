import Hero from '@/components/ui/hero';
import Image from 'next/image';

export default function Annuity() {
	return (
		<>
			<Hero
				title={'ANNUITY'}
				description={`Annuities can help meet retirement needs`}
				image={'/annuity.webp'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<div className='grid grid-cols-2 gap-5 container'>
					<Image
						className='h-full w-full object-cover rounded-lg'
						height={1080}
						width={1080}
						src='/life-insurance.webp'
						alt='Types of Life Insurance'
					/>
					<div className=''>
						<h2 className=''>ANNUITY</h2>
						<p>Annuities can help meet retirement needs</p>
						<p>
							You protect your car, your home and even your
							life with insurance, but are you leaving your
							retirement income unprotected? With potential
							for tax-deferred growth and a guaranteed
							income stream, annuities can be important to
							your retirement objectives. Annuities can
							help you grow — and protect — your retirement
							income. Work with one of our financial
							professional to find out if an annuity may be
							right for you.
						</p>
					</div>
				</div>
				<p className='pt-10'>
					An annuity is essentially a contract between you and an
					insurance company. You buy an annuity by giving an
					insurance company either a single lump sum or making
					payments over time. The insurance company then invests
					your money (called “premium” or “purchase payment”) in
					different ways depending on the type of annuity you
					select. You can buy an annuity that begins making
					payments back to you right away (an “immediate
					annuity”) or, if you prefer, annuities are available
					that delay making payments to you for an extended
					period — sometimes many years — while your investment
					in the annuity grows. This is called a deferred
					annuity.
				</p>
				<h2 className='text-xl font-bold'>Types of annuities</h2>
				<p>
					There are two types of annuities that investors can
					choose from when it comes to purchasing these
					instruments. Immediate annuities will begin paying a
					stream of income immediately upon issuance for either a
					set period of time or as long as the annuitant or
					annuitants are living. Immediate annuities are funded
					with a single lump-sum purchase.
				</p>

				<ul>
					<li>
						<span className='font-bold'>
							Deferred annuities
						</span>{' '}
						will grow tax-deferred for a period of time before
						paying out, and they can be funded with either a
						single lump-sum purchase or with a series of
						payments. Deferred annuities can be divided into
						separate categories:
					</li>
					<li>
						<span className='font-bold'>Fixed annuities</span>{' '}
						pay a guaranteed rate of interest for a set period
						of time and can offer a variety of interest rate
						guaranteed periods and payout options.
					</li>
					<li>
						<span className='font-bold'>
							Fixed indexed annuities
						</span>{' '}
						calculate an interest crediting rate according to
						a formula that is based on the performance of an
						underlying financial benchmark, such as the S&P
						500 Index.
					</li>
					<li>
						<span className='font-bold'>
							Variable annuities
						</span>{' '}
						don't come with a principal guarantee like fixed
						and indexed annuities. The money that is invested
						in them is allocated among a selection of mutual
						fund-like sub accounts, which may rise or fall
						according to market conditions. Many variable
						annuity contracts offer living and death benefit
						riders that provide different guarantees within
						the contract. They typically come with additional
						costs.
					</li>
				</ul>
				<h2 className='text-xl font-bold'>
					How does an annuity work?
				</h2>
				<p>
					Regardless of the type of annuity you buy, the primary
					purpose is to create income for you, and there are
					different ways to do that. You can set up payments that
					last for your entire life, a specific period of time,
					or a combination of both.
				</p>
				<p>
					For example, you may choose to receive monthly payments
					for 20 years.
				</p>
				<p>
					In this scenario, the company will calculate the
					payment amount based on your premium or the current
					value of your annuity contract, and begin making
					payments. Under this plan, you would be guaranteed to
					receive 240 monthly payments. If you were to die before
					all the payments were made, your beneficiary would
					receive the remainder, until all 240 payments were
					made.
				</p>
				<p>
					Alternatively, you may want payments for your entire
					life, with a guarantee that payments will be received
					for a certain period of time, say 20 years.
				</p>
				<p>
					In this example, if you were to die before the company
					made 240 monthly payments (20 years), your beneficiary
					would get the remaining payments, just like in the
					situation above. If you lived past the end of the
					20-year guaranteed period, however, the insurance
					company would continue to make payments as long as you
					lived but your beneficiary would not be entitled to any
					payments after your death.
				</p>
				<p>
					If you buy a deferred annuity, you can take withdrawals
					from the contract, even before your income payments
					begin. Each annuity has its own rules about how much
					you can withdraw from the contract without incurring a
					penalty — called a “surrender charge.” You may also
					completely surrender a deferred annuity. That means you
					tell the insurance company to cancel your contract and
					pay you the surrender value — the value of your
					contract less any surrender charge the company imposes.
				</p>

				<h2
					className='text-xl font-bold'
					id='retirement-plan'
				>
					Retirement annuity
				</h2>
				<p>
					Annuities are commonly used for retirement planning.
					They allow you to convert a lump sum of money into
					guaranteed income for the rest of your life, or to
					invest over time and later convert the annuity
					contract's value into guaranteed income payments. And,
					any growth in your annuity value is generally not taxed
					until you take money out of the contract. This
					combination of tax deferral and the ability to
					establish guaranteed income can make an annuity an
					effective tool for retirement planning and other long
					term goals.
				</p>
				<p>
					As you determine what annuity might be right for you,
					remember they are intended as vehicles for long-term
					retirement planning, which is why withdrawals reduce an
					annuity's remaining death benefit, contract value, cash
					surrender value and future earnings. Annuities also may
					be subject to income tax and, if taken prior to age
					59½, an additional 10% IRS tax penalty may apply.
				</p>
				<p>
					Annuity payments from a tax-qualified plan will be
					fully taxable as ordinary income
				</p>
			</div>
		</>
	);
}
