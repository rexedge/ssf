import NavBar from '@/components/ui/nav-bar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Smart Steps Financial Services',
	description: 'Empowering Your Financial Future',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} min-h-screen`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
