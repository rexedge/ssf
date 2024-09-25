import Hero from '@/components/ui/hero';
import Image from 'next/image';

export default function MortgageProtection() {
	return (
		<>
			<Hero
				title={'Mortgage Protection Plan'}
				description={`Pay off your mortgage balance in the event of death, disability, or critical illness.`}
				image={'/mortgage-protection-plan.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<div className='grid lg:grid-cols-2 gap-5 container'>
					<Image
						className='h-full w-full object-cover rounded-lg'
						height={1080}
						width={1080}
						src='/mortgage-protection-2.jpg'
						alt='Types of Life Insurance'
					/>
					<div className=''>
						<h2>MORTGAGE PROTECTION PLAN</h2>
						<p>
							Mortgage protection plan is a type of life
							insurance designed to pay off your mortgage
							balance in the event of death, disability, or
							critical illness. Mortgage protection
							insurance can be a valuable tool for
							homeowners looking to protect their family
							and their home in the event of unforeseen
							circumstances.
						</p>
					</div>
				</div>

				<p className='pt-10'>
					Here are some key benefits of mortgage protection
					insurance:
				</p>
				<ul>
					<li>
						<span className='font-bold'>
							Financial Security for Your Family:
						</span>{' '}
						One of the primary benefits of mortgage protection
						insurance is providing financial security for your
						family. If you were to pass away unexpectedly, the
						policy would pay off the remaining balance on your
						mortgage, allowing your loved ones to remain in
						their home without the burden of mortgage
						payments.
					</li>
					<li>
						<span className='font-bold'>Peace of Mind:</span>{' '}
						Knowing that your mortgage will be covered in the
						event of your death can provide peace of mind for
						you and your family. It removes the worry of how
						your loved ones will afford to stay in their home
						if something were to happen to you.
					</li>
				</ul>
			</div>
		</>
	);
}
