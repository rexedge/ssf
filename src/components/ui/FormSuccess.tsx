import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function FormSuccess({ message }: { message?: string }) {
	if (!message) return null;
	return (
		<div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 w-full'>
			<FaCheckCircle className='w-4 h-4' />
			<p>{message}</p>
		</div>
	);
}
