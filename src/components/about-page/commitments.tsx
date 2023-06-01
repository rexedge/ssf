import { COMMITMENT_STATEMENTS } from '@/utils/const';
import React from 'react';

const Commitment: React.FC = () => {
	return (
		<section className='bg-teal-100 dark:bg-teal-800 py-20 px-4'>
			<h2 className='text-4xl font-bold mb-4 text-center'>
				Our Commitment
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{COMMITMENT_STATEMENTS.map((statement, index) => (
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
