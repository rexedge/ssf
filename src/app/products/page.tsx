import ProductList from '@/components/product-page/products';
import Hero from '@/components/ui/hero';
import React from 'react';

export default function Products() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Hero
				title='Our Products'
				description=''
				image='/products.jpg'
			/>
			<ProductList />
			<section className='flex flex-col justify-center px-4 py-20 items-center bg-teal-100 dark:bg-teal-800'>
				By offering a range of tailored products, we strive to
				provide comprehensive financial solutions that meet your
				specific needs and goals. We invite you to explore each
				product in detail and reach out to our knowledgeable team to
				discuss how our products can support your financial journey.
			</section>
		</main>
	);
}
