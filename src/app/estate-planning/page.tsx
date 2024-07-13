import Hero from '@/components/ui/hero';
import Image from 'next/image';

export default function EstatePlanning() {
	return (
		<>
			<Hero
				title={'Estate and Lagacy Planning'}
				description={`Legacy planning protects your family and loved ones.`}
				image={'/estate-and-legacy-planning-2.jpg'}
			/>
			<div className='prose lg:prose-lg prose-orange max-w-5xl mx-auto py-10'>
				<div className='grid grid-cols-2 gap-5 container'>
					<Image
						className='h-full w-full object-cover rounded-lg'
						height={1080}
						width={1080}
						src='/estate-and-legacy-planning.jpg'
						alt='Types of Life Insurance'
					/>
					<div className=''>
						<h2 className='text-2xl '>
							ESTATE & LEGACY PLANNING
						</h2>
						<p>
							Legacy planning protects your family and
							loved ones.
						</p>
						<p>
							Supporting our clients to build, preserve and
							enhance a legacy is critical. We’re here to
							help, with resources for estate planning,
							wealth transfer, charitable giving and more.
						</p>
					</div>
				</div>
				<p className='pt-10'>Why talk about legacy planning?</p>
				<p>
					Providing clients with a solid plan for after death is
					the best way to protect their finances, people and even
					relationships. When clients clearly state their wishes,
					they can focus on enjoying retirement and relieve their
					loved ones of difficult decisions later.{' '}
				</p>
				<p>
					Estate planning isn’t just for the wealthy. It’s a
					critical part of any financial plan. By walking you
					through this process, you’ll be help to protect your
					family and rest easier knowing you’ve got all your
					bases covered.{' '}
				</p>
				<p>
					An estate plan ensures a seamless distribution of
					assets in the event of a client’s incapacitation or
					death. It’s an opportunity to provide needed protection
					for loved ones by minimizing stress and confusion,
					reducing or avoiding taxes and much more.{' '}
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
