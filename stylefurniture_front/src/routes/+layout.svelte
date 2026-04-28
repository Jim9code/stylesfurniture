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
</div>
