<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';

	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Syles Furniture | Built by hand. Made to last.</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-brand-900 text-brand-50">
	<Navbar />
	
	<main class="flex-grow pt-20">
		{#key page.url.pathname}
			<div in:fade={{ duration: 400, delay: 400 }} out:fade={{ duration: 400 }}>
				{@render children()}
			</div>
		{/key}
	</main>

	<Footer />

	<!-- Floating WhatsApp Button -->
	<a 
		href="https://api.whatsapp.com/send?phone=2348132900368&text=Hello!%20I%20am%20interested%20in%20Syles%20Furniture."
		target="_blank"
		rel="noopener noreferrer"
		class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
		aria-label="Chat on WhatsApp"
	>
		<!-- WhatsApp Icon -->
		<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.116.957 11.487.957 6.05.957 1.626 5.334 1.622 10.763c0 1.706.463 3.376 1.34 4.83l-.997 3.644 3.738-.973c1.408.766 2.923 1.173 4.614 1.173zm9.18-7.312c-.246-.123-1.457-.72-1.685-.803-.227-.083-.393-.123-.558.124-.166.246-.64.803-.784.966-.145.163-.29.185-.536.062-.246-.123-1.04-.383-1.981-1.222-.732-.653-1.227-1.46-1.37-1.706-.145-.246-.015-.379.108-.501.11-.11.246-.288.37-.432.123-.144.164-.246.246-.41.082-.164.041-.309-.02-.432-.062-.124-.558-1.344-.764-1.838-.2-.486-.421-.42-.578-.428l-.493-.01c-.171 0-.448.064-.682.32-.234.256-.893.873-.893 2.128 0 1.256.912 2.467 1.038 2.633.127.166 1.794 2.74 4.347 3.843.607.262 1.08.419 1.449.537.61.194 1.164.166 1.601.101.488-.072 1.457-.596 1.662-1.173.206-.578.206-1.073.145-1.173-.062-.1-.227-.163-.473-.285z"/>
		</svg>
		
		<!-- Tooltip -->
		<span class="absolute right-16 scale-0 transition-all rounded bg-brand-800 border border-brand-700 p-2 text-xs text-brand-100 group-hover:scale-100 whitespace-nowrap shadow-xl">
			Chat with the Builder
		</span>
	</a>
</div>
