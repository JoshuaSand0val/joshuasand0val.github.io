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
		/** Light-Dark Support: */
		@supports (color: light-dark(white, black)) {
			color-scheme: light dark;
		}
	}

	:root {
		position: absolute;
		inset: 0;
		display: block;
		min-height: 100%;
		font-family: var(--font);
		line-height: var(--line-height);
		background-color: var(--neutral-50-800);
		color: var(--neutral-900-50);
		scroll-behavior: smooth;
		transition-property: background-color, color;
		transition-duration: var(--fast-time);
		transition-timing-function: ease-out;
		&::after {
			content: "";
			position: absolute;
			z-index: var(--top-index);
			inset: 0;
			background-image: linear-gradient(145deg, oklch(0.5 0.15 260 / 0.2) -50%, transparent);
			pointer-events: none;
		}
	}

	body {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		font-size: var(--md-font);
		min-height: 100%;
		margin: 0;
	}

	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		width: 100%;
		max-width: var(--3xl-container);
		padding-top: clamp(var(--sm-size), var(--responsive-size), var(--md-size));
		padding-right: max(var(--responsive-size), var(--safe-right) + var(--md-size));
		padding-bottom: var(--xs-size);
		padding-left: max(var(--responsive-size), var(--safe-left) + var(--md-size));
		flex: 1 0 auto;
		margin: 0 auto;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: var(--display-font);
		line-height: var(--display-line-height);
		margin: var(--2xs-size) 0;
	}

	h1 {
		font-size: var(--6xl-font);
	}

	h2 {
		font-size: var(--xl-font);
	}

	h3 {
		font-size: var(--lg-font);
	}

	h4 {
		font-size: var(--md-font);
	}

	h5 {
		font-size: var(--sm-font);
	}

	h6 {
		font-size: var(--xs-font);
	}

	small, sup, sub {
		font-size: var(--smaller-font);
	}

	a[href] {
		display: inline;
		color: var(--primary-500-300);
		&:not(:hover, :focus) {
			text-decoration-line: none;
		}
		&:active {
			text-decoration-color: var(--primary-400);
		}
	}
</style>