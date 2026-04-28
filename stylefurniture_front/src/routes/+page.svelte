<script>
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import { fade } from 'svelte/transition';

	const featuredProducts = [
		{ name: 'The Artisan Dining Table', price: '$2,850', image: '/images/featured_table_1777377005792.png', slug: 'artisan-dining-table' },
		{ name: 'Curve Accent Chair', price: '$850', image: '/images/featured_chair_1777377229474.png', slug: 'curve-accent-chair' },
		{ name: 'Minimalist Storage Cabinet', price: '$3,200', image: '/images/featured_cabinet_1777377410841.png', slug: 'minimalist-storage-cabinet' },
	];
</script>

<svelte:head>
	<title>Syles Furniture | Handcrafted to last</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
	<div class="absolute inset-0 z-0">
		<img 
			src="/images/hero_workshop_1777376979432.png" 
			alt="Premium woodworking workshop" 
			class="w-full h-full object-cover object-center opacity-40"
		/>
		<div class="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-transparent to-brand-900"></div>
	</div>
	
	<div class="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20" in:fade={{duration: 1000, delay: 600}}>
		<h1 class="text-5xl md:text-7xl font-serif text-brand-50 mb-6 tracking-tight leading-tight">
			Built by hand.<br/><span class="text-brand-300 italic">Made to last.</span>
		</h1>
		<p class="text-lg md:text-xl text-brand-200 mb-10 max-w-2xl mx-auto font-light tracking-wide">
			Premium, bespoke wooden furniture crafted with passion and precision.
		</p>
		<a href="/shop" class="inline-flex items-center px-8 py-4 border border-brand-300 text-brand-100 hover:bg-brand-300 hover:text-brand-900 transition-all duration-300 text-sm tracking-widest uppercase font-medium">
			Explore the Collection
		</a>
	</div>
</section>

<!-- Featured Pieces -->
<section class="py-24 bg-brand-900 relative">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="flex justify-between items-end mb-16 border-b border-brand-800 pb-6">
			<h2 class="text-3xl md:text-4xl font-serif text-brand-100">Featured Pieces</h2>
			<a href="/shop" class="group flex items-center text-sm tracking-widest uppercase text-brand-400 hover:text-brand-200 transition-colors">
				View All
				<ArrowRight size={16} class="ml-2 transform group-hover:translate-x-1 transition-transform" />
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
			{#each featuredProducts as product}
				<a href={`/shop/${product.slug}`} class="group block">
					<div class="aspect-[4/5] overflow-hidden bg-brand-800 mb-6 relative">
						<img 
							src={product.image} 
							alt={product.name}
							class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
						/>
						<div class="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
					</div>
					<h3 class="font-serif text-xl text-brand-100 mb-2">{product.name}</h3>
					<p class="text-brand-400 font-medium tracking-wide">{product.price}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- The Craft (Mini Process) -->
<section class="py-24 bg-brand-800 text-brand-100">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div>
				<h2 class="text-3xl md:text-5xl font-serif mb-8 leading-tight">The Art of<br/><span class="text-brand-300 italic">Woodworking.</span></h2>
				<p class="text-brand-200 mb-12 text-lg leading-relaxed font-light">
					Every piece we create is a testament to traditional craftsmanship mixed with modern design. We source the finest materials and let the wood dictate the final form.
				</p>
				
				<div class="space-y-10">
					<div class="flex">
						<div class="flex-shrink-0 mt-1">
							<span class="flex items-center justify-center h-8 w-8 rounded-full border border-brand-400 text-brand-300 text-sm font-serif">1</span>
						</div>
						<div class="ml-6">
							<h4 class="text-lg font-medium text-brand-100 uppercase tracking-widest text-sm mb-2">Cut</h4>
							<p class="text-brand-300 font-light">Selecting the perfect grain and making the precise initial cuts to define the structure.</p>
						</div>
					</div>
					<div class="flex">
						<div class="flex-shrink-0 mt-1">
							<span class="flex items-center justify-center h-8 w-8 rounded-full border border-brand-400 text-brand-300 text-sm font-serif">2</span>
						</div>
						<div class="ml-6">
							<h4 class="text-lg font-medium text-brand-100 uppercase tracking-widest text-sm mb-2">Build</h4>
							<p class="text-brand-300 font-light">Assembling with traditional joinery techniques ensuring structural integrity for generations.</p>
						</div>
					</div>
					<div class="flex">
						<div class="flex-shrink-0 mt-1">
							<span class="flex items-center justify-center h-8 w-8 rounded-full border border-brand-400 text-brand-300 text-sm font-serif">3</span>
						</div>
						<div class="ml-6">
							<h4 class="text-lg font-medium text-brand-100 uppercase tracking-widest text-sm mb-2">Finish</h4>
							<p class="text-brand-300 font-light">Hand-rubbed natural oils that protect the wood while highlighting its inherent beauty.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="relative h-[600px] hidden lg:block">
				<img src="/images/custom_process_1777377461481.png" alt="Craftsmanship process" class="absolute inset-0 w-full h-full object-cover shadow-2xl opacity-80" />
			</div>
		</div>
	</div>
</section>

<!-- About Preview & Custom Teaser -->
<section class="py-24 bg-brand-900 border-t border-brand-800">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-16">
			<!-- About Preview -->
			<a href="/about" class="group block">
				<div class="aspect-video overflow-hidden mb-8 relative">
					<img src="/images/workshop_portrait_1777377708850.png" alt="The Builder" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80" />
					<div class="absolute inset-0 bg-brand-900/40 group-hover:bg-brand-900/20 transition-colors duration-500"></div>
				</div>
				<h3 class="text-2xl font-serif text-brand-100 mb-4">Meet the Builder</h3>
				<p class="text-brand-300 mb-6 font-light leading-relaxed">
					Driven by a passion for functional art, Syles Furniture was born out of a desire to create pieces that ground a room and bring people together.
				</p>
				<span class="text-brand-400 uppercase tracking-widest text-sm group-hover:text-brand-100 transition-colors inline-flex items-center">
					Read the Story <ArrowRight size={16} class="ml-2" />
				</span>
			</a>

			<!-- Custom Teaser -->
			<div class="bg-brand-800 p-12 flex flex-col justify-center items-start border border-brand-700 hover:border-brand-500 transition-colors duration-300">
				<h3 class="text-3xl font-serif text-brand-100 mb-4">Have something in mind?</h3>
				<p class="text-brand-200 mb-10 font-light leading-relaxed text-lg">
					We specialize in bespoke commissions tailored to your specific space and aesthetic needs. Let's build your dream piece together.
				</p>
				<a href="/custom" class="inline-flex items-center px-8 py-4 bg-brand-200 text-brand-900 hover:bg-white transition-colors duration-300 text-sm tracking-widest uppercase font-medium">
					Request Custom Work
				</a>
			</div>
		</div>
	</div>
</section>
