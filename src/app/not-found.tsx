import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='h-screen grid place-items-center text-teal-700'>
			<div className='text-center space-y-2'>
				<h2>Resource Not Found</h2>
				<p>Could not find requested resource</p>
				<Button asChild>
					<Link href='/'>Return Home</Link>
				</Button>
			</div>
		</div>
	);
}
