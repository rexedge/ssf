import ContactUs from '@/components/home-page/contact-us';
import Hero from '@/components/ui/hero';
import MapView from '@/components/ui/map-view';
import { MAP_LOCATION } from '@/utils/const';
import React from 'react';

export default function Contacts() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				image='/contactus.jpg'
				title='Contact Us'
				description="We're excited to hear from you! Whether you
				have questions, inquiries, or would like to schedule a
				consultation, our team is here to assist you. You can reach
				us through any of the below methods"
			/>
			<ContactUs />
			<MapView location={MAP_LOCATION} />
		</main>
	);
}
