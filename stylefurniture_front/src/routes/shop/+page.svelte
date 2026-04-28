<script>
	import { fade } from 'svelte/transition';
	import { products, categories } from '$lib/data.js';

	let activeCategory = $state('All');

	let filteredProducts = $derived(
		activeCategory === 'All' 
			? products 
			: products.filter(p => p.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Shop | Syles Furniture</title>
</svelte:head>

<section class="pt-32 pb-24 bg-brand-900 min-h-screen">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		
		<!-- Header -->
		<div class="text-center mb-20" in:fade={{duration: 800}}>
			<h1 class="text-4xl md:text-6xl font-serif text-brand-100 mb-6 tracking-tight">Shop the Collection</h1>
			<p class="text-brand-300 max-w-2xl mx-auto text-lg font-light">
				Explore our curated selection of handcrafted furniture. Each piece is built to order with uncompromising quality.
			</p>
		</div>

		<!-- Filters -->
		<div class="flex justify-center mb-16 space-x-8 border-b border-brand-800 pb-4 overflow-x-auto" in:fade={{duration: 800, delay: 200}}>
			{#each categories as category}
				<button 
					class="text-sm tracking-widest uppercase transition-colors duration-300 pb-4 -mb-[17px] whitespace-nowrap {activeCategory === category ? 'text-brand-100 border-b-2 border-brand-300 font-medium' : 'text-brand-400 hover:text-brand-200 border-b-2 border-transparent'}"
					onclick={() => activeCategory = category}
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Product Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" in:fade={{duration: 800, delay: 400}}>
			{#each filteredProducts as product (product.slug)}
				<a href={`/shop/${product.slug}`} class="group block" in:fade>
					<div class="aspect-[4/5] overflow-hidden bg-brand-800 mb-6 relative border border-brand-800 group-hover:border-brand-600 transition-colors duration-500">
						<img 
							src={product.image} 
							alt={product.name}
							class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
						/>
					</div>
					<h3 class="font-serif text-xl text-brand-100 mb-2">{product.name}</h3>
					<p class="text-brand-400 font-medium tracking-wide">{product.price}</p>
				</a>
			{:else}
				<div class="col-span-full py-20 text-center text-brand-400 font-light text-lg">
					No products found in this category.
				</div>
			{/each}
		</div>

	</div>
</section>
