<script>
	import { fade } from 'svelte/transition';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import MessageSquare from 'lucide-svelte/icons/message-square';
	import PenTool from 'lucide-svelte/icons/pen-tool';
	import Hammer from 'lucide-svelte/icons/hammer';

	let formState = $state({
		type: '',
		size: '',
		budget: '',
		details: ''
	});

	function handleSubmit(e) {
		e.preventDefault();
		// Form submission logic would go here
		alert("Thank you for your inquiry. We will be in touch shortly.");
	}
</script>

<svelte:head>
	<title>Custom Orders | Syles Furniture</title>
</svelte:head>

<section class="pt-32 pb-24 bg-brand-900 min-h-screen">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		
		<!-- Header -->
		<div class="text-center mb-24" in:fade={{duration: 800}}>
			<h1 class="text-4xl md:text-6xl font-serif text-brand-100 mb-6 tracking-tight">Bespoke Commissions</h1>
			<p class="text-brand-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
				Furniture built specifically for your space, tailored to your exact needs. From monumental dining tables to perfect-fit built-ins.
			</p>
		</div>

		<!-- How It Works -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-b border-brand-800 py-16" in:fade={{duration: 800, delay: 200}}>
			<div class="text-center px-4">
				<div class="w-16 h-16 mx-auto bg-brand-800 border border-brand-700 rounded-full flex items-center justify-center mb-6 text-brand-300">
					<MessageSquare size={24} />
				</div>
				<h3 class="text-xl font-serif text-brand-100 mb-4">1. Consultation</h3>
				<p class="text-brand-400 font-light text-sm leading-relaxed">
					We discuss your vision, space constraints, material preferences, and intended use to form the foundation of the project.
				</p>
			</div>
			<div class="text-center px-4 relative">
				<div class="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-brand-800 -z-10"></div>
				<div class="w-16 h-16 mx-auto bg-brand-800 border border-brand-700 rounded-full flex items-center justify-center mb-6 text-brand-300 bg-brand-900">
					<PenTool size={24} />
				</div>
				<h3 class="text-xl font-serif text-brand-100 mb-4">2. Design & Quote</h3>
				<p class="text-brand-400 font-light text-sm leading-relaxed">
					You receive detailed 3D renderings, material samples (if requested), and a comprehensive quote with timeline.
				</p>
			</div>
			<div class="text-center px-4 relative">
				<div class="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-brand-800 -z-10"></div>
				<div class="w-16 h-16 mx-auto bg-brand-800 border border-brand-700 rounded-full flex items-center justify-center mb-6 text-brand-300 bg-brand-900">
					<Hammer size={24} />
				</div>
				<h3 class="text-xl font-serif text-brand-100 mb-4">3. The Build</h3>
				<p class="text-brand-400 font-light text-sm leading-relaxed">
					We source the perfect lumber and begin crafting. You'll receive progress updates throughout the entire build process.
				</p>
			</div>
		</div>

		<!-- Gallery Teaser / Past Works -->
		<div class="mb-32">
			<div class="flex justify-between items-end mb-12">
				<h2 class="text-3xl font-serif text-brand-100">Recent Custom Work</h2>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div class="aspect-video bg-brand-800 overflow-hidden relative group">
					<img src="/images/custom_process_1777377461481.png" alt="Custom process" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
					<div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-900 to-transparent">
						<p class="text-brand-100 font-serif text-lg">Live Edge Conference Table</p>
						<p class="text-brand-400 text-sm">Walnut & Brass</p>
					</div>
				</div>
				<div class="aspect-video bg-brand-800 overflow-hidden relative group">
					<img src="/images/featured_cabinet_1777377410841.png" alt="Custom cabinet" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
					<div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-900 to-transparent">
						<p class="text-brand-100 font-serif text-lg">Built-in Media Credenza</p>
						<p class="text-brand-400 text-sm">White Oak</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Request Form -->
		<div class="max-w-3xl mx-auto bg-brand-800 p-8 md:p-12 border border-brand-700">
			<h2 class="text-3xl font-serif text-brand-100 mb-2">Start a Project</h2>
			<p class="text-brand-300 font-light mb-10">Fill out the form below and we'll get back to you within 48 hours to discuss your piece.</p>
			
			<form class="space-y-8" onsubmit={handleSubmit}>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<!-- Furniture Type -->
					<div>
						<label for="type" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Furniture Type</label>
						<select id="type" bind:value={formState.type} class="block w-full bg-brand-900 border-brand-700 text-brand-100 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4">
							<option value="">Select a type...</option>
							<option value="table">Dining / Coffee Table</option>
							<option value="seating">Chair / Bench</option>
							<option value="storage">Cabinet / Bookshelf</option>
							<option value="bed">Bed Frame</option>
							<option value="other">Other</option>
						</select>
					</div>

					<!-- Estimated Size -->
					<div>
						<label for="size" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Estimated Size</label>
						<input type="text" id="size" bind:value={formState.size} placeholder="e.g., 8ft x 4ft" class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4" />
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<!-- Style / Material Ref -->
					<div>
						<label for="style" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Preferred Wood / Style</label>
						<input type="text" id="style" placeholder="e.g., Walnut, Mid-Century" class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4" />
					</div>

					<!-- Budget -->
					<div>
						<label for="budget" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Estimated Budget</label>
						<select id="budget" bind:value={formState.budget} class="block w-full bg-brand-900 border-brand-700 text-brand-100 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4">
							<option value="">Select a range...</option>
							<option value="1k-3k">$1,000 - $3,000</option>
							<option value="3k-5k">$3,000 - $5,000</option>
							<option value="5k-10k">$5,000 - $10,000</option>
							<option value="10k+">$10,000+</option>
						</select>
					</div>
				</div>

				<!-- Details -->
				<div>
					<label for="details" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Project Details</label>
					<textarea id="details" bind:value={formState.details} rows="4" placeholder="Tell us more about what you're looking for..." class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4"></textarea>
				</div>

				<button type="submit" class="w-full flex justify-center items-center px-8 py-4 border border-transparent text-sm font-medium tracking-widest uppercase text-brand-900 bg-brand-200 hover:bg-white transition-colors duration-300">
					Submit Inquiry
					<ArrowRight size={16} class="ml-2" />
				</button>
			</form>
		</div>

	</div>
</section>
