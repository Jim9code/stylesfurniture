import { products } from '$lib/data.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const product = products.find((p) => p.slug === params.slug);

	if (!product) {
		throw error(404, 'Product not found');
	}

	return {
		product,
        // Mock related products (excluding current)
        relatedProducts: products.filter(p => p.slug !== params.slug).slice(0, 3)
	};
}
