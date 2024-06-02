import Hero from '@/components/ui/hero';
import { PRODUCT_DETAILS } from '@/utils/const';
import { notFound } from 'next/navigation';
import React from 'react';

export default function ProductPage({
	params,
}: {
	params: { product: string };
}) {
	const product = PRODUCT_DETAILS.find(
		(product) => product.slug === `${params.product}`
	);
	if (!product) {
		return notFound();
	}
	return (
		<div>
			<Hero
				description={product.description}
				image={product.hero_image}
				title={product.name}
			/>
			<div className=' text-2xl font-bold max-w-6xl bg-red-200 w-full flex items-center justify-center mx-auto'></div>
		</div>
	);
}
