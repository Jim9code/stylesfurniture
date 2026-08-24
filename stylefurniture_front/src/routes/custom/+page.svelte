<script>
	import { fade } from 'svelte/transition';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import MessageSquare from 'lucide-svelte/icons/message-square';
	import PenTool from 'lucide-svelte/icons/pen-tool';
	import Hammer from 'lucide-svelte/icons/hammer';

	// Configurable Contact Defaults
	const BUILDER_EMAIL = "Jethwork4@gmail.com";
	const BUILDER_WHATSAPP = "2348132900368";

	let formState = $state({
		name: '',
		email: '',
		phone: '',
		type: '',
		size: '',
		style: '',
		budget: '',
		details: ''
	});

	let isSubmitting = $state(false);
	let isSubmitted = $state(false);
	let errorMessage = $state('');

	async function handleSubmit(e) {
		e.preventDefault();
		
		if (!formState.name || !formState.email) {
			errorMessage = "Name and Email are required fields.";
			return;
		}

		isSubmitting = true;
		errorMessage = '';

		try {
			const response = await fetch(`https://formsubmit.co/ajax/${BUILDER_EMAIL}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify({
					"Client Name": formState.name,
					"Email Address": formState.email,
					"Phone Number": formState.phone || "Not Provided",
					"Furniture Type": formState.type || "Not Specified",
					"Estimated Size": formState.size || "Not Specified",
					"Preferred Wood / Style": formState.style || "Not Specified",
					"Estimated Budget": formState.budget || "Not Specified",
					"Project Details": formState.details || "Not Specified",
					"_subject": `New Bespoke Commission Request from ${formState.name}`,
					"_replyto": formState.email
				})
			});

			if (response.ok) {
				isSubmitted = true;
			} else {
				const result = await response.json();
				errorMessage = result.message || "Failed to send your inquiry. Please try again.";
			}
		} catch (err) {
			console.error(err);
			errorMessage = "A network error occurred. Please check your internet connection and try again.";
		} finally {
			isSubmitting = false;
		}
	}

	function getWhatsAppLink() {
		const text = `Hello! I would like to request a custom furniture commission:
- Name: ${formState.name}
- Email: ${formState.email}
- Phone: ${formState.phone || 'Not Provided'}
- Furniture Type: ${formState.type || 'Not Specified'}
- Size: ${formState.size || 'Not Specified'}
- Wood/Style: ${formState.style || 'Not Specified'}
- Budget: ${formState.budget || 'Not Specified'}
- Details: ${formState.details || 'Not Specified'}`;

		return `https://api.whatsapp.com/send?phone=${BUILDER_WHATSAPP}&text=${encodeURIComponent(text)}`;
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

		<!-- Request Form / Success View -->
		<div class="max-w-3xl mx-auto bg-brand-800 p-8 md:p-12 border border-brand-700">
			{#if isSubmitted}
				<div class="text-center py-8 space-y-6" in:fade>
					<div class="w-16 h-16 mx-auto bg-emerald-950/30 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
					</div>
					<h2 class="text-3xl font-serif text-brand-100">Inquiry Received</h2>
					<p class="text-brand-300 font-light max-w-lg mx-auto leading-relaxed">
						Thank you, <strong class="text-brand-100">{formState.name}</strong>. Your custom commission inquiry has been sent to the builder's email (<strong class="text-brand-200">{BUILDER_EMAIL}</strong>).
					</p>
					
					<div class="pt-6 border-t border-brand-700/50 space-y-4">
						<p class="text-sm text-brand-400 font-light">
							Would you also like to send this request directly via WhatsApp for a faster response?
						</p>
						<div class="flex flex-col sm:flex-row justify-center gap-4">
							<a 
								href={getWhatsAppLink()} 
								target="_blank" 
								rel="noopener noreferrer"
								class="inline-flex justify-center items-center px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-medium tracking-widest uppercase text-xs transition-colors duration-300"
							>
								Send via WhatsApp
							</a>
							<button 
								onclick={() => { isSubmitted = false; formState = { name: '', email: '', phone: '', type: '', size: '', style: '', budget: '', details: '' }; }}
								class="inline-flex justify-center items-center px-8 py-4 border border-brand-300 text-brand-100 hover:bg-brand-300 hover:text-brand-900 transition-all duration-300 text-xs tracking-widest uppercase font-medium"
							>
								Submit Another
							</button>
						</div>
					</div>
				</div>
			{:else}
				<h2 class="text-3xl font-serif text-brand-100 mb-2">Start a Project</h2>
				<p class="text-brand-300 font-light mb-10">Fill out the form below and we'll get back to you within 48 hours to discuss your piece.</p>
				
				{#if errorMessage}
					<div class="mb-8 p-4 bg-red-950/50 border border-red-500/30 text-red-300 text-sm font-light rounded-none">
						{errorMessage}
					</div>
				{/if}

				<form class="space-y-8" onsubmit={handleSubmit}>
					<!-- Name and Email -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<label for="name" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Your Name *</label>
							<input type="text" id="name" required bind:value={formState.name} placeholder="John Doe" class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4" />
						</div>

						<div>
							<label for="email_field" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Email Address *</label>
							<input type="email" id="email_field" required bind:value={formState.email} placeholder="john@example.com" class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4" />
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<!-- Phone Number -->
						<div>
							<label for="phone" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Phone Number (Optional)</label>
							<input type="tel" id="phone" bind:value={formState.phone} placeholder="+1 (555) 000-0000" class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4" />
						</div>

						<!-- Furniture Type -->
						<div>
							<label for="type" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Furniture Type</label>
							<select id="type" bind:value={formState.type} class="block w-full bg-brand-900 border-brand-700 text-brand-100 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4">
								<option value="">Select a type...</option>
								<option value="table">Dining / Coffee Table</option>
								<option value="seating">Chair / Bench</option>
								<option value="storage">Cabinet / Sideboard</option>
								<option value="bed">Bed Frame</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<!-- Estimated Size -->
						<div>
							<label for="size" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Estimated Size</label>
							<input type="text" id="size" bind:value={formState.size} placeholder="e.g., 8ft x 4ft" class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4" />
						</div>

						<!-- Style / Material Ref -->
						<div>
							<label for="style" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Preferred Wood / Style</label>
							<input type="text" id="style" bind:value={formState.style} placeholder="e.g., Walnut, Mid-Century" class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4" />
						</div>
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

					<!-- Details -->
					<div>
						<label for="details" class="block text-sm font-medium tracking-widest uppercase text-brand-400 mb-2">Project Details</label>
						<textarea id="details" bind:value={formState.details} rows="4" placeholder="Tell us more about what you're looking for..." class="block w-full bg-brand-900 border-brand-700 text-brand-100 placeholder-brand-600 focus:ring-brand-500 focus:border-brand-500 rounded-none py-3 px-4"></textarea>
					</div>

					<button type="submit" disabled={isSubmitting} class="w-full flex justify-center items-center px-8 py-4 border border-transparent text-sm font-medium tracking-widest uppercase text-brand-900 bg-brand-200 hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
						{#if isSubmitting}
							Sending Inquiry...
						{:else}
							Submit Inquiry
							<ArrowRight size={16} class="ml-2" />
						{/if}
					</button>
				</form>
			{/if}
		</div>

	</div>
</section>

