<script>
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Mail from 'lucide-svelte/icons/mail';
	import Phone from 'lucide-svelte/icons/phone';
	import MapPin from 'lucide-svelte/icons/map-pin';
</script>

<footer class="bg-brand-900 text-brand-200 border-t border-brand-800">
	<div class="max-w-7xl mx-auto px-6 py-16 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
			
			<!-- Brand -->
			<div class="space-y-6">
				<a href="/" class="font-serif text-2xl font-semibold tracking-wider text-brand-100 block">
					SYLES FURNITURE
				</a>
				<p class="text-sm leading-relaxed max-w-xs text-brand-300">
					Built by hand. Made to last. Premium bespoke furniture crafted with passion and precision.
				</p>
				<div class="flex space-x-4">
					<a href="#" class="text-brand-400 hover:text-brand-200 transition-colors">
						<span class="sr-only">Instagram</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
					</a>
					<a href="#" class="text-brand-400 hover:text-brand-200 transition-colors">
						<span class="sr-only">Twitter</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-sm font-semibold text-brand-100 tracking-wider uppercase mb-6">Navigation</h3>
				<ul class="space-y-4">
					<li><a href="/" class="text-sm hover:text-white transition-colors">Home</a></li>
					<li><a href="/shop" class="text-sm hover:text-white transition-colors">Shop Collection</a></li>
					<li><a href="/custom" class="text-sm hover:text-white transition-colors">Custom Orders</a></li>
					<li><a href="/about" class="text-sm hover:text-white transition-colors">Our Story</a></li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="text-sm font-semibold text-brand-100 tracking-wider uppercase mb-6">Contact Us</h3>
				<ul class="space-y-4 text-sm">
					<li class="flex items-start">
						<MapPin size={18} class="mr-3 text-brand-500 mt-0.5 flex-shrink-0" />
						<span>123 Workshop Lane<br />Timberville, OR 97000</span>
					</li>
					<li class="flex items-center">
						<Phone size={18} class="mr-3 text-brand-500 flex-shrink-0" />
						<a href="tel:+15551234567" class="hover:text-white transition-colors">+1 (555) 123-4567</a>
					</li>
					<li class="flex items-center">
						<Mail size={18} class="mr-3 text-brand-500 flex-shrink-0" />
						<a href="mailto:hello@sylesfurniture.com" class="hover:text-white transition-colors">hello@syles.com</a>
					</li>
				</ul>
			</div>

			<!-- Quick Form -->
			<div>
				<h3 class="text-sm font-semibold text-brand-100 tracking-wider uppercase mb-6">Quick Inquiry</h3>
				<form class="space-y-3" onsubmit={(e) => e.preventDefault()}>
					<div>
						<label for="email" class="sr-only">Email address</label>
						<input 
							type="email" 
							id="email" 
							placeholder="Your email" 
							class="block w-full bg-brand-800 border-brand-700 rounded-none text-brand-100 placeholder-brand-500 focus:ring-brand-500 focus:border-brand-500 sm:text-sm px-4 py-3"
						/>
					</div>
					<button 
						type="submit" 
						class="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-none text-brand-900 bg-brand-200 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-brand-900"
					>
						Send Message
						<ArrowRight size={16} class="ml-2" />
					</button>
				</form>
			</div>
		</div>
		
		<div class="mt-16 pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center">
			<p class="text-xs text-brand-500">&copy; {new Date().getFullYear()} Syles Furniture. All rights reserved.</p>
		</div>
	</div>
</footer>
