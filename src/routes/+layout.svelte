<script>
	import Navbar from "$lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<Navbar />
<main>
	<slot></slot>
</main>
<Footer />

<style lang="postcss" global>
	/* Import Prerequisites: */
	@import "sanitize.css";
	@import "semantic-props";

	/* Import Font Families: */
	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Satisfy&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

	.--semantic {
		/* Font Families: */
		--font: "Inter", sans-serif;
		--monospace-font: "Ubuntu Mono", monospace;
		--display-font: "Ubuntu", sans-serif;
		--accent-font: "Satisfy", cursive;
		/* Line Heights: */
		--line-height: 1.75;
		--display-line-height: 1.25;
		/* Color Weights: */
		--primary-50: oklch(0.95 0.02 20);
		--primary-100: oklch(0.9 0.02 20);
		--primary-200: oklch(0.8 0.02 20);
		--primary-300: oklch(0.7 0.02 20);
		--primary-400: oklch(0.6 0.02 20);
		--primary-500: oklch(0.5 0.02 20);
		/** Light-Dark Support: */
		@supports (color: light-dark(white, black)) {
			color-scheme: light dark;
			--primary-50: light-dark(oklch(0.95 0.02 20), oklch(0.95 0 0));
			--primary-100: light-dark(oklch(0.9 0.02 20), oklch(0.9 0 0));
			--primary-200: light-dark(oklch(0.8 0.02 20), oklch(0.8 0 0));
			--primary-300: light-dark(oklch(0.7 0.02 20), oklch(0.7 0 0));
			--primary-400: light-dark(oklch(0.6 0.02 20), oklch(0.6 0 0));
			--primary-500: light-dark(oklch(0.5 0.02 20), oklch(0.5 0 0));
		}
	}

	:root {
		position: absolute;
		inset: 0;
		display: block;
		min-height: 100%;
		font-family: var(--font);
		line-height: var(--line-height);
		background-color: var(--primary-50-800);
		background-image: linear-gradient(0deg, oklch(0.5 0 0 / 0.05) 50%, transparent 50%);
		background-size: 100% var(--3x-small-size), 100% 100%;
		background-repeat: repeat-y, no-repeat;
		background-attachment: fixed;
		color: var(--secondary-900-50);
		scroll-behavior: smooth;
		transition-property: background-color, color;
		transition-duration: var(--fast-time);
		transition-timing-function: ease-out;
	}

	body {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		font-size: var(--medium-font);
		min-height: 100%;
		margin: 0;
	}

	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		width: 100%;
		max-width: var(--3x-large-container);
		padding-top: clamp(var(--small-size), var(--responsive-size), var(--medium-size));
		padding-right: max(var(--responsive-size), var(--safe-right) + var(--medium-size));
		padding-bottom: var(--x-small-size);
		padding-left: max(var(--responsive-size), var(--safe-left) + var(--medium-size));
		flex: 1 0 auto;
		margin: 0 auto;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: var(--display-font);
		line-height: var(--display-line-height);
		margin: var(--2x-small-size) 0;
	}

	h1 {
		font-size: var(--6x-large-font);
	}

	h2 {
		font-size: var(--x-large-font);
	}

	h3 {
		font-size: var(--large-font);
	}

	h4 {
		font-size: var(--medium-font);
	}

	h5 {
		font-size: var(--small-font);
	}

	h6 {
		font-size: var(--x-small-font);
	}

	small, sup, sub {
		font-size: var(--smaller-font);
	}

	a[href] {
		display: inline;
		color: var(--accent-500-300);
		&:not(:hover, :focus) {
			text-decoration-line: none;
		}
		&:active {
			text-decoration-color: var(--accent-400);
		}
	}
</style>