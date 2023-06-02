import Commitment from '@/components/about-page/commitments';
import Expertise from '@/components/about-page/expertise';
import Team from '@/components/about-page/team-members';
import Values from '@/components/about-page/values';
import VisionAndMission from '@/components/about-page/vision-and-mission';
import ContactUs from '@/components/home-page/contact-us';
import Hero from '@/components/ui/hero';
import { COMPANY_PROFILE, TEAM_MEMBERS } from '@/utils/const';
import React from 'react';

export default function page() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				title='About Smart Steps'
				description={`Welcome to ${COMPANY_PROFILE.name} Services, a leading
				provider of comprehensive financial solutions designed to
				empower individuals and families on their journey to
				financial success. With years of industry experience and a
				passion for helping others, our team is committed to guiding
				you towards a secure and prosperous future.`}
				image='/abouthero.jpg'
			/>
			<VisionAndMission />
			<Expertise />
			<Values />
			<Team teamMembers={TEAM_MEMBERS} />
			<Commitment />
			<ContactUs />
		</main>
	);
}
