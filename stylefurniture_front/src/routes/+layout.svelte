<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';

	let { children } = $props();
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
