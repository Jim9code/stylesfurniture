<script>
	import { page } from '$app/state';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	
	let isOpen = $state(false);
	
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/shop', label: 'Shop' },
		{ href: '/custom', label: 'Custom' },
		{ href: '/about', label: 'About' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-900/90 backdrop-blur-md border-b border-brand-800">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="flex items-center justify-between h-20">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="font-serif text-2xl font-semibold tracking-wider text-brand-100">
					SYLES FURNITURE
				</a>
			</div>
			
			<!-- Desktop Menu -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-12">
					{#each links as link}
						<a 
							href={link.href} 
							class="text-sm tracking-widest uppercase transition-colors duration-200 {page.url.pathname === link.href ? 'text-brand-300 font-medium' : 'text-brand-200 hover:text-white'}"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="-mr-2 flex md:hidden">
				<button 
					type="button" 
					onclick={toggleMenu}
					class="inline-flex items-center justify-center p-2 rounded-md text-brand-200 hover:text-white focus:outline-none"
				>
					<span class="sr-only">Open main menu</span>
					{#if isOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isOpen}
		<div class="md:hidden bg-brand-900 border-b border-brand-800">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				{#each links as link}
					<a 
						href={link.href} 
						onclick={() => isOpen = false}
						class="block px-3 py-4 text-base tracking-widest uppercase {page.url.pathname === link.href ? 'text-brand-300' : 'text-brand-200 hover:text-white'}"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
