import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';
import * as React from 'react';

export const BecomeAnAgentResponseEmail = () => (
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
				<Container>
					<Section style={box}>
						<Text>
							Thanks for submitting your information. Our
							agent will reach out to you shortly for your
							onboarding process!
						</Text>
						<Hr style={hr} />
						<Text>
							If you want more information, visit our{' '}
							<Link
								href='https://stripe.com/docs'
								className='text-accent'
							>
								website
							</Link>
							.
						</Text>
					</Section>
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

export default BecomeAnAgentResponseEmail;

const main = {
	backgroundColor: '#f6f9fc',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
	backgroundColor: '#ffffff',
	margin: '0 auto',
	padding: '20px 0 48px',
	marginBottom: '64px',
};

const box = {
	padding: '0 48px',
};

const hr = {
	borderColor: '#e6ebf1',
	margin: '20px 0',
};

const paragraph = {
	color: '#525f7f',

	fontSize: '16px',
	lineHeight: '24px',
	textAlign: 'left' as const,
};

const anchor = {
	color: '#556cd6',
};

const button = {
	backgroundColor: '#656ee8',
	borderRadius: '5px',
	color: '#fff',
	fontSize: '16px',
	fontWeight: 'bold',
	textDecoration: 'none',
	textAlign: 'center' as const,
	display: 'block',
	width: '100%',
	padding: '10px',
};

const footer = {
	color: '#8898aa',
	fontSize: '12px',
	lineHeight: '16px',
};
