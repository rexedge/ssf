import Expertise from '@/components/about-page/expertise';
import Team from '@/components/about-page/team-members';
import Values from '@/components/about-page/values';
import VisionAndMission from '@/components/about-page/vision-and-mission';
import ContactUs from '@/components/home-page/contact-us';
import Hero from '@/components/ui/hero';
import React from 'react';

const teamMembers = [
	{
		name: 'Kayode Atiba',
		position: 'Financial Advisor',
		bio: 'Kayode Atiba is a seasoned financial advisor with over 10 years of experience...',
		photo: '/kayode.jpg',
	},
	// {
	// 	name: 'Jane Smith',
	// 	position: 'Investment Specialist',
	// 	bio: 'Jane Smith specializes in investment strategies and has a deep understanding...',
	// 	photo: '/ayo.jpg',
	// },
	// {
	// 	name: 'Mike Johnson',
	// 	position: 'Retirement Planner',
	// 	bio: 'Mike Johnson is a retirement planning expert, helping clients create solid...',
	// 	photo: '/ayo.jpg',
	// },
];

export default function page() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				title='About Smart Steps'
				description='Welcome to Smart Steps Financial Services, a leading
				provider of comprehensive financial solutions designed to
				empower individuals and families on their journey to
				financial success. With years of industry experience and a
				passion for helping others, our team is committed to guiding
				you towards a secure and prosperous future.'
				image='/abouthero.jpg'
			/>
			<VisionAndMission />
			<Expertise />
			<Values />
			<Team teamMembers={teamMembers} />
			<section className='min-h-screen'>
				[Section 4: Our Team] Meet Our Experts [Team Photo: A
				professional and approachable image of your team] Our team
				of financial professionals brings a diverse range of
				expertise and backgrounds. With their combined knowledge and
				dedication, they are here to guide you towards financial
				success and provide the support you need at every step.
			</section>
			<section className='min-h-screen'>
				[Section 5: Our Commitment] At Smart Steps Financial
				Services, we are committed to: Putting your best interests
				first and acting as your trusted financial partner.
				Providing personalized solutions that align with your unique
				goals and circumstances. Delivering exceptional service and
				support to ensure your satisfaction. Staying informed and
				up-to-date with the latest industry trends and strategies.
				Continuously improving our knowledge and skills to better
				serve you.
			</section>
			<ContactUs />
		</main>
	);
}
