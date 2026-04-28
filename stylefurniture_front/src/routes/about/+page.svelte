<script>
	import { fade } from 'svelte/transition';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
	<title>Our Story | Syles Furniture</title>
</svelte:head>

<section class="pt-32 pb-24 bg-brand-900 min-h-screen">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		
		<!-- Header -->
		<div class="text-center mb-24" in:fade={{duration: 800}}>
			<h1 class="text-4xl md:text-6xl font-serif text-brand-100 mb-6 tracking-tight">Meet the Builder</h1>
			<p class="text-brand-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
				Driven by a deep respect for natural materials and a commitment to uncompromising quality.
			</p>
		</div>

		<!-- The Story -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32" use:reveal={{ delay: 100 }}>
			<div class="aspect-[4/5] bg-brand-800 overflow-hidden relative border border-brand-800">
				<img 
					src="/images/workshop_portrait_1777377708850.png" 
					alt="Portrait of the builder in the workshop" 
					class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
				/>
			</div>
			
			<div class="flex flex-col justify-center">
				<h2 class="text-3xl md:text-4xl font-serif text-brand-100 mb-8">A Return to Craft</h2>
				<div class="prose prose-invert prose-brand text-brand-200">
					<p class="font-light text-lg leading-relaxed mb-6">
						Syles Furniture began as a rebellion against disposable, mass-produced goods. In a world where furniture is often designed for obsolescence, I wanted to build things that would outlast me.
					</p>
					<p class="font-light text-lg leading-relaxed mb-6">
						Every piece is crafted by hand in our Oregon workshop. I don't use CNC machines or automated assembly lines. It's just me, traditional hand tools, carefully maintained vintage machinery, and wood sourced from sustainable, local mills.
					</p>
					<p class="font-light text-lg leading-relaxed">
						I believe that the objects we live with shape our daily experience. A solid walnut dining table isn't just a place to eat; it's the anchor of a home, a witness to decades of shared meals, conversations, and life. That's the responsibility I take on with every cut and every joint.
					</p>
				</div>
			</div>
		</div>

		<!-- Workshop Visuals -->
		<div class="mb-24" use:reveal={{ delay: 200, threshold: 0.2 }}>
			<h2 class="text-3xl font-serif text-brand-100 mb-12 text-center">Inside the Workshop</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="aspect-video bg-brand-800 overflow-hidden relative">
					<img 
						src="/images/custom_process_1777377461481.png" 
						alt="Detail shot of hand planing wood" 
						class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
					/>
				</div>
				<div class="aspect-video bg-brand-800 overflow-hidden relative">
					<img 
						src="/images/hero_workshop_1777376979432.png" 
						alt="Wide shot of the workshop space" 
						class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
					/>
				</div>
			</div>
		</div>

		<!-- Values -->
		<div class="bg-brand-800 border border-brand-700 p-12 lg:p-16 text-center">
			<h2 class="text-3xl font-serif text-brand-100 mb-12">Our Philosophy</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
				<div use:reveal>
					<h3 class="text-lg font-medium text-brand-100 uppercase tracking-widest text-sm mb-4">Material First</h3>
					<p class="text-brand-300 font-light text-sm leading-relaxed">
						We select lumber not just for stability, but for character. We celebrate the natural imperfections and unique grain patterns of every board.
					</p>
				</div>
				<div use:reveal={{ delay: 200 }}>
					<h3 class="text-lg font-medium text-brand-100 uppercase tracking-widest text-sm mb-4">Honest Joinery</h3>
					<p class="text-brand-300 font-light text-sm leading-relaxed">
						No hidden screws or shortcuts. We use traditional mortise and tenon, dovetail, and half-lap joints that are designed to last lifetimes.
					</p>
				</div>
				<div use:reveal={{ delay: 400 }}>
					<h3 class="text-lg font-medium text-brand-100 uppercase tracking-widest text-sm mb-4">Timeless Form</h3>
					<p class="text-brand-300 font-light text-sm leading-relaxed">
						We avoid fleeting trends, focusing instead on clean, architectural lines and proportions that will look just as relevant in fifty years as they do today.
					</p>
				</div>
			</div>
		</div>

	</div>
</section>
