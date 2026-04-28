<script>
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Check from 'lucide-svelte/icons/check';
	import { fade } from 'svelte/transition';

	let { data } = $props();
	let { product, relatedProducts } = $derived(data);
</script>

<svelte:head>
	<title>{product.name} | Syles Furniture</title>
</svelte:head>

<section class="pt-32 pb-24 bg-brand-900 min-h-screen">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		
		<!-- Product Details -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32" in:fade={{duration: 800}}>
			<!-- Image Gallery -->
			<div class="space-y-6">
				<div class="aspect-square bg-brand-800 overflow-hidden border border-brand-800 relative">
					<img 
						src={product.image} 
						alt={product.name}
						class="w-full h-full object-cover object-center"
					/>
				</div>
			</div>

			<!-- Product Info -->
			<div class="flex flex-col justify-center">
				<div class="mb-8">
					<span class="text-sm text-brand-400 tracking-widest uppercase mb-4 block">{product.category}</span>
					<h1 class="text-4xl md:text-5xl font-serif text-brand-100 mb-4">{product.name}</h1>
					<p class="text-2xl font-light text-brand-300">{product.price}</p>
				</div>

				<div class="prose prose-invert prose-brand text-brand-200 mb-10">
					<p class="leading-relaxed font-light text-lg">{product.description}</p>
				</div>

				<div class="mb-10">
					<h3 class="text-sm font-semibold text-brand-100 tracking-widest uppercase mb-4 border-b border-brand-800 pb-2">Materials & Details</h3>
					<ul class="space-y-3">
						{#each product.materials as material}
							<li class="flex items-center text-brand-300 font-light">
								<Check size={16} class="mr-3 text-brand-500" />
								{material}
							</li>
						{/each}
					</ul>
				</div>

				<div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-brand-800">
					<button class="flex-1 bg-brand-200 text-brand-900 px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-white transition-colors duration-300 flex justify-center items-center">
						Inquire / Order
					</button>
					<a href="/custom" class="flex-1 border border-brand-500 text-brand-200 px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-brand-800 transition-colors duration-300 flex justify-center items-center">
						Customize Size
					</a>
				</div>
			</div>
		</div>

		<!-- Related / Custom Teaser -->
		<div class="border-t border-brand-800 pt-24" in:fade={{duration: 800, delay: 200}}>
			<div class="flex justify-between items-end mb-16">
				<h2 class="text-3xl font-serif text-brand-100">Want something similar?</h2>
				<a href="/custom" class="group flex items-center text-sm tracking-widest uppercase text-brand-400 hover:text-brand-200 transition-colors">
					View Custom Options
					<ArrowRight size={16} class="ml-2 transform group-hover:translate-x-1 transition-transform" />
				</a>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				{#each relatedProducts.slice(0, 2) as related}
					<a href={`/shop/${related.slug}`} class="group flex bg-brand-800/50 hover:bg-brand-800 transition-colors border border-transparent hover:border-brand-700">
						<div class="w-1/3 aspect-[3/4] overflow-hidden bg-brand-800">
							<img 
								src={related.image} 
								alt={related.name}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
							/>
						</div>
						<div class="w-2/3 p-8 flex flex-col justify-center">
							<span class="text-xs text-brand-500 tracking-widest uppercase mb-2">{related.category}</span>
							<h3 class="font-serif text-xl text-brand-100 mb-2">{related.name}</h3>
							<p class="text-brand-400 font-medium">{related.price}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>

	</div>
</section>
