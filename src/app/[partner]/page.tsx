import { PARTNERS } from '@/utils/const';
import React from 'react';

export default function PartnersPage({
	params,
}: {
	params: { partner: string };
}) {
	const partner = PARTNERS.find(
		(partner) => partner.href === `/${params.partner}`
	);
	return (
		<div>
			<div className=' text-2xl font-bold h-screen bg-red-200 w-screen flex items-center justify-center'>
				{partner?.name} Partners Page
			</div>
		</div>
	);
}
