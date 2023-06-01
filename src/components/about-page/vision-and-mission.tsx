import { COMPANY_PROFILE } from '@/utils/const';
import React from 'react';

const VisionAndMission: React.FC = () => {
	return (
		<section className='flex flex-col items-center justify-center min-h-screen bg-teal-100 dark:bg-teal-800 py-10'>
			<h1 className='text-4xl font-bold mb-8 text-center'>
				Our Vision and Mission
			</h1>
			<div className='container mx-auto p-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<h2 className='text-2xl font-bold mb-4'>
							Our Vision
						</h2>
						<p className='mb-2'>
							At {COMPANY_PROFILE.name} Services, our
							vision is to create a future where financial
							freedom is within reach for all individuals.
							We envision a world where everyone has the
							confidence and ability to make informed
							financial decisions, leading to a life of
							security, prosperity, and opportunities.
						</p>
						<p className='mb-2'>
							We aspire to be the trusted partner that
							empowers individuals to navigate the
							financial landscape with ease, providing
							innovative solutions and comprehensive
							resources. Through our expertise,
							personalized guidance, and cutting-edge
							tools, we aim to transform the way people
							approach their finances and pave the way for
							a brighter financial future.
						</p>
					</div>
					<div>
						<h2 className='text-2xl font-bold mb-4'>
							Our Mission
						</h2>
						<p className='mb-2'>
							At {COMPANY_PROFILE.name} Services, our
							mission is to provide our clients with the
							knowledge, tools, and personalized guidance
							they need to achieve their financial goals.
							We believe that financial well-being is
							attainable for everyone, and we strive to
							demystify the complexities of finance and
							empower individuals to take control of their
							financial futures.
						</p>
						<p className='mb-2'>
							Through education, personalized guidance,
							accessibility, trust, and continual
							innovation, we are committed to equipping
							individuals with the resources and support
							they need to make informed financial
							decisions. We aim to break down barriers,
							foster financial literacy, and inspire
							individuals to embark on their unique
							financial journeys, turning dreams into
							achievable realities, one step at a time.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VisionAndMission;
