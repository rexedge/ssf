import NavBar from '@/components/ui/nav-bar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/ui/footer';
import { COMPANY_PROFILE } from '@/utils/const';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: COMPANY_PROFILE.name,
	description: COMPANY_PROFILE.tagline,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} min-h-screen w-screen overflow-x-clip`}
			>
				<NavBar />
				{children}
				<Footer />
				<Toaster richColors />
			</body>
		</html>
	);
}
