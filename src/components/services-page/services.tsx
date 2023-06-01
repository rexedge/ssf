'use client';
import { SERVICES } from '@/utils/const';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceList: React.FC = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section className='min-h-screen py-20 px-4'>
			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
				variants={containerVariants}
				initial='hidden'
				animate={inView ? 'visible' : 'hidden'}
				ref={ref}
			>
				{SERVICES.map((service, index) => (
					<motion.div
						key={index}
						className='p-4 rounded shadow text-center cursor-pointer bg-teal-100 dark:bg-teal-800'
						variants={cardVariants}
					>
						<h3 className='text-xl font-bold mb-2'>
							{service.title}
						</h3>
						<p>{service.description}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default ServiceList;
