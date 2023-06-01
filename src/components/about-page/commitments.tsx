import React from 'react';

const Commitment: React.FC = () => {
	const commitmentStatements = [
		'Putting your best interests first and acting as your trusted financial partner.',
		'Providing personalized solutions that align with your unique goals and circumstances.',
		'Delivering exceptional service and support to ensure your satisfaction.',
		'Staying informed and up-to-date with the latest industry trends and strategies.',
		'Continuously improving our knowledge and skills to better serve you.',
	];

	return (
		<section className='bg-teal-100 dark:bg-teal-800 py-20 px-4'>
			<h2 className='text-4xl font-bold mb-4 text-center'>
				Our Commitment
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{commitmentStatements.map((statement, index) => (
					<div
						key={index}
						className='bg-white dark:bg-black p-4 rounded shadow'
					>
						<p>{statement}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Commitment;
