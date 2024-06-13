import { IBecomeAnAgentSchema } from '@/actions/become-an-agent';
import { IContactUsSchema } from '@/actions/contact-us';
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

export const ContactUsMail = ({
	email,
	message,
	name,
	need,
	subject,
}: IContactUsSchema) => (
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
				<title>Contact Us</title>
			</Head>
			<Preview>Contact us</Preview>
			<Body className='p-0 m-0'>
				<Section className='h-32 max-w-xl mx-auto w-full grid place-items-center mb-5'>
					<Img
						className='h-28 w-auto'
						src='https://smartstepssolutions.com/logo.png'
					/>
				</Section>
				<Container className='bg-gray-100 rounded-xl p-5 mb-5'>
					<Text>
						Full Name: <br />
						<span>{name}</span>
					</Text>
					<Text>
						Email Address: <br />
						<span>{email}</span>
					</Text>
					<Text>
						What do you need help with during the session?:{' '}
						<br />
						<span>{need}</span>
					</Text>
					<Text>
						Subject: <br />
						<span>{subject}</span>
					</Text>
					<Text>
						Message: <br />
						<span>{message}</span>
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

ContactUsMail.PreviewProps = {
	name: 'Sample Nmae',
	email: 'email@example.com',
	subject: 'Test Subject',
	message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas saepe nulla iste minima vero libero, maxime nihil iure. Rerum veritatis tempora dolor nam assumenda? Quia modi quod facilis laudantium.',
	need: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
} as IContactUsSchema;

export default ContactUsMail;
