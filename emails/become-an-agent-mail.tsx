import { IBecomeAnAgentSchema } from '@/actions/become-an-agent';
import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';
import * as React from 'react';

export const BecomeAnAgentMail = ({
	about,
	age,
	city,
	commission,
	email,
	experience,
	fname,
	fullparttime,
	hearaboutus,
	insurance,
	license,
	lname,
	motivation,
	occupation,
	phone,
	postal,
	state,
	street,
	transportation,
	workexperience,
}: IBecomeAnAgentSchema) => (
	<Tailwind
		config={{
			theme: {
				extend: {
					colors: {
						accent: '#FF4F00',
						brand: '#00008b',
					},
				},
			},
		}}
	>
		<Html>
			<Head>
				<title>Become An Agent</title>
			</Head>
			<Preview>Log in with this magic link</Preview>
			<Body className='p-0 m-0'>
				<Section className='h-32 max-w-xl mx-auto w-full grid place-items-center mb-5'>
					<Img
						className='h-28 w-auto'
						src='https://smartstepssolutions.com/logo.png'
					/>
				</Section>
				<Container className='bg-gray-100 rounded-xl p-5 mb-5'>
					<Text>
						Full Name (First and last name): <br />
						<span>{`${fname} ${lname}`}</span>
					</Text>
					<Text>
						Phone Number: <br />
						<span>{phone}</span>
					</Text>
					<Text>
						Email Address: <br />
						<span>{email}</span>
					</Text>
					<Text>
						Do you have a current and active life insurance
						license?: <br />
						<span>{insurance}</span>
					</Text>
					<Text>
						Are you 18 years or older?: <br />
						<span>{age}</span>
					</Text>
					<Text>
						Do you have previous sales experience?: <br />
						<span>{experience}</span>
					</Text>
					<Text>
						Do you have a valid driver’s license?: <br />
						<span>{license}</span>
					</Text>
					<Text>
						Do you own reliable transportation?: <br />
						<span>{transportation}</span>
					</Text>
					<Text>
						Are you looking to start part-time or full-time?:{' '}
						<br />
						<span>{transportation}</span>
					</Text>
					<Text>
						Are you willing to take on commission based pay?:{' '}
						<br />
						<span>{commission}</span>
					</Text>
					<Text>
						Can you briefly tell us about your previous work
						experience?: <br />
						<span>{workexperience}</span>
					</Text>
					<Text>
						Do you consider yourself self-motivated? Provide
						an example.: <br />
						<span>{motivation}</span>
					</Text>
					<div className='grid md:grid-cols-2'>
						<Text>
							Street: <br />
							<span>{street}</span>
						</Text>
						<Text>
							City: <br />
							<span>{city}</span>
						</Text>
						<Text>
							State: <br />
							<span>{state}</span>
						</Text>
						<Text>
							Postal/Zip Code: <br />
							<span>{postal}</span>
						</Text>
					</div>
					<Text>
						How did you hear about us?: <br />
						<span>{hearaboutus.join(', ')}</span>
					</Text>
					<Text>
						Current occupation or job title?: <br />
						<span>{occupation}</span>
					</Text>
					<Text>
						Is there anything else you would like to tell us
						about yourself?: <br />
						<span>{about}</span>
					</Text>
				</Container>
				<Section className='bg-brand grid gap-5 place-items-center text-center text-white font-sans py-3'>
					<Img
						className='h-28 w-auto'
						src='https://smartstepssolutions.com/logo.png'
					/>
					<div className=''>Copyright 2024</div>
				</Section>
			</Body>
		</Html>
	</Tailwind>
);

BecomeAnAgentMail.PreviewProps = {
	fname: 'Ayobami',
	lname: 'Oyeniran',
	phone: '+2348061719533',
	email: 'ap.oyeniran@gmail.com',
	insurance: 'No',
	age: 'Yes',
	experience: 'Yes',
	license: 'Yes',
	transportation: 'Yes',
	fullparttime: 'Full Time',
	commission: 'Yes',
	workexperience:
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi distinctio tempora deserunt eum nesciunt velit consequatur quibusdam rem dolore voluptas porro laborum, ut magnam corrupti adipisci. Sunt inventore laboriosam eos.',
	motivation:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, eum quos tempora fugit odio fuga consectetur doloremque quasi recusandae culpa temporibus totam. Facilis, dolorum sit delectus voluptatem animi eveniet cupiditate!',
	city: 'Agege',
	state: 'Lagos',
	street: '512 Road',
	postal: '101000',
	hearaboutus: ['facebook', 'Instagram'],
	occupation: 'Developer',
	about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit a voluptatibus accusamus facilis consequuntur perspiciatis? Voluptate enim doloremque ducimus illo, aliquid nesciunt est perferendis numquam, alias nobis nulla voluptatibus.',
} as IBecomeAnAgentSchema;

export default BecomeAnAgentMail;
