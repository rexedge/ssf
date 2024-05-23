import { COMMITMENT_STATEMENTS } from '@/utils/const';
import React from 'react';

const Commitment: React.FC = () => {
	return (
		<section className='bg-primary py-20 px-4'>
			<div className='max-w-6xl mx-auto '>
				<h2 className='text-4xl font-bold mb-4 text-center text-background'>
					Our Commitment
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{COMMITMENT_STATEMENTS.map((statement, index) => (
						<div
							key={index}
							className='bg-gray-100 text-muted-foreground p-4 rounded shadow'
						>
							<p>{statement}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Commitment;
