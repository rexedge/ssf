import { Card } from '@/components/ui/card';
import Hero from '@/components/ui/hero';
import { COMPANY_PROFILE } from '@/utils/const';
import {
	AppWindowMac,
	CandlestickChart,
	Construction,
	GraduationCap,
	TextQuote,
} from 'lucide-react';
import Link from 'next/link';

export default function OurProcess() {
	return (
		<>
			<Hero
				title={'Our Process'}
				description={``}
				image={'/our-process.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10 px-5px-5'>
				<p>
					Thank you for stopping by. Our pro team at{' '}
					<span className='text-tertiary font-bold'>
						{COMPANY_PROFILE.name}
					</span>{' '}
					is here to help you every step of the way. That
					includes the education process, helping you discover
					what options are available to you, through evaluation
					and application, and beyond, as we also are here with
					you further down the road, providing policy maintenance
					to make sure you are successful on your journey. For
					more information on our process, please click the icons
					below.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
					<Link
						href={'#education'}
						className='no-underline '
					>
						<Card className='p-3 lg:p-5 flex flex-col items-center justify-center text-xl font-bold uppercase'>
							<GraduationCap className='h-16 w-16 text-tertiary' />
							Education
						</Card>
					</Link>
					<Link
						href={'#evaluation'}
						className='no-underline '
					>
						<Card className='p-3 lg:p-5 flex flex-col items-center justify-center text-xl font-bold uppercase'>
							<CandlestickChart className='h-16 w-16 text-tertiary' />
							Evaluation
						</Card>
					</Link>
					<Link
						href={'#quotation'}
						className='no-underline '
					>
						<Card className='p-3 lg:p-5 flex flex-col items-center justify-center text-xl font-bold uppercase'>
							<TextQuote className='h-16 w-16 text-tertiary' />
							Quotation
						</Card>
					</Link>
					<Link
						href={'#application'}
						className='no-underline '
					>
						<Card className='p-3 lg:p-5 flex flex-col items-center justify-center text-xl font-bold uppercase'>
							<AppWindowMac className='h-16 w-16 text-tertiary' />
							Application
						</Card>
					</Link>
					<Link
						href={'#maintenance'}
						className='no-underline '
					>
						<Card className='p-3 lg:p-5 flex flex-col items-center justify-center text-xl font-bold uppercase'>
							<Construction className='h-16 w-16 text-tertiary' />
							Maintenance
						</Card>
					</Link>
				</div>
				<div id='education'>
					<h2>EDUCATION</h2>
					<p>
						At a basic level, educating oneself is about
						understanding your options, products, strategies,
						etc.
						<br />
						Most financial service providers and agencies stop
						here.
					</p>
					<p>
						However, at{' '}
						<span className='text-tertiary font-bold'>
							{COMPANY_PROFILE.name}
						</span>
						, our objective is a much deeper dive that seeks
						to benefit you holistically.
					</p>
					<p>
						You see, there are some essentials, call it
						insight, that you need to have about money,
						financial planning, and leverage that can change
						your life by freeing up your resources, and
						consequently, your time, your most valuable asset
						next to your own personal growth and maturation.
					</p>
					<p>
						That is why unlocking this new understanding for
						you is our priority, so you can make enlightened
						strategic decisions about your financial future
						going forward.
					</p>
				</div>
				<div id='evaluation'>
					<h2>EVALUATION</h2>
					<p>
						The natural next step after gaining a new
						understanding through Education is to evaluate how
						various strategic approaches can best empower you
						by offering financial control, stability,
						leverage, and certainty.
					</p>
					<h3>
						<span className='text-tertiary font-bold'>
							{COMPANY_PROFILE.name}
						</span>{' '}
						evaluation process
					</h3>
					<p>
						Whereas most financial service providers focus on
						comparing financial products or companies, the
						Smart Steps Financial evaluation process is about
						matching you with the right strategy and design
						options, and then taking the first steps toward a
						plan of action that you will be excited to pursue.
					</p>
					<p>
						Your expert Pro Client Guide will help you get
						started at creating an ideal plan of action to
						achieve your highest aspirations.
					</p>
				</div>
				<div id='quotation'>
					<h2>QUOTATION</h2>
					<p>
						Just beyond Evaluation, is the Quotation process
						where you begin to see how the actual numbers can
						work powerfully in your favour.
					</p>
					<p>
						This isn&apos;t another drab session of looking at
						your CD rates or your bank statement.
						<br />
						We&apos;re talking about wealth building numbers
						for exponential growth, guaranteed with tax
						deferral and using this leverage to actualize
						dreams of freedom, stability, leverage, and
						certainty.
					</p>
					<h3>
						<span className='text-tertiary font-bold'>
							{COMPANY_PROFILE.name}
						</span>{' '}
						quotation process
					</h3>
					<p>
						At Smart Steps Financial, our priority in the
						Quotation process is to offer much more than
						generating random projected costs. This process
						will be used to define your plan by adding real
						numbers needed to facilitate and implement your
						Application Process.
					</p>
					<p>
						Your expert Pro Client Guide will help you
						understand the context around obtaining quotes,
						such as how rates are impacted by things like age,
						health rating, and company.
					</p>
				</div>
				<div id='application'>
					<h2>APPLICATION</h2>
					<p>
						When you&apos;ve moved through your Evaluation and
						Quotation phases, it is time to submit an
						application where you will finally see your
						&ldquo;Offer&rdquo; with an overview of actual
						costs and &ldquo;guaranteed returns&rdquo;.
					</p>
					<p>
						When you see costs and guaranteed outcomes, things
						really begin to make sense. This is the beginning
						of a pursuit towards financial freedom, stabilized
						by financial certainty.
					</p>
					<h3>
						<span className='text-tertiary font-bold'>
							{COMPANY_PROFILE.name}
						</span>{' '}
						application process
					</h3>
					<p>
						The{' '}
						<span className='text-tertiary font-bold'>
							{COMPANY_PROFILE.name}
						</span>{' '}
						application process takes any remaining guesswork
						out of the equation by asking the company to
						commit to your plan without binding you as an
						applicant to accept.
					</p>
					<p>
						Your Pro Client Guide can maximize your
						application process by leveraging their expertise
						to get you the best results such as obtaining the
						best financial company rating and/or creating the
						best policy design strategy.
					</p>
				</div>
				<div id='maintenance'>
					<h2>MAINTENANCE</h2>
					<p>
						We live in a world of constant change. As such, it
						is all too common for Life Insurance Products,
						even those backed by a solid strategy, to become
						inadequate or even obsolete.
					</p>
					<h3>
						<span className='text-tertiary font-bold'>
							{COMPANY_PROFILE.name}
						</span>{' '}
						maintenance process
					</h3>
					<p>
						Changes in financial situations, law changes,
						changing needs such as new family members or
						changes in medical status can all threaten the
						soundness of your plan.
					</p>
					<p>
						This is why at Smart Steps Financial; we
						prioritize regular status sessions to discuss
						issues such as maintaining your strategic life
						insurance or annuity during what we define as your
						Maintenance phase.
					</p>
					<p>
						Your expert Pro Client Guide is available to
						conduct regular status check-ups concerning all
						aspects of your strategic plan and products. 
						<br />
						So, what are you waiting for?{' '}
						<Link href={COMPANY_PROFILE.calendly}>
							Please schedule your complimentary strategy
							session today!
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
