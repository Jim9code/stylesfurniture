export function reveal(node, { delay = 0, threshold = 0.1 } = {}) {
	// Initially add the base hidden class
	node.classList.add('reveal-hidden');
	if (delay) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				node.classList.add('reveal-visible');
				observer.unobserve(node); // Only trigger once
			}
		});
	}, {
		threshold
	});

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
