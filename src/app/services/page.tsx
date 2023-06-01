import ServiceList from '@/components/services-page/services';
import Hero from '@/components/ui/hero';
import React from 'react';

export default function Services() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				title='Our Services'
				description=''
				image='/services.jpg'
			/>
			<ServiceList />
		</main>
	);
}
