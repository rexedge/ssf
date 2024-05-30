import ResourcesList from '@/components/services-page/services';
import ServiceList from '@/components/services-page/services';
import Hero from '@/components/ui/hero';
import React from 'react';

export default function Resources() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				title='Our Resources'
				description=''
				image='/services.jpg'
			/>
			<ResourcesList />
		</main>
	);
}
