<script>
	/* CSS prerequisite packages: */
	import "sanitize.css";
	import "semantic-props";

	import Navbar from "$lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<Navbar />
<main>
	<slot></slot>
</main>
<Footer />

<style lang="postcss" global>
	/* Import Font Families: */
	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Satisfy&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

	@property --accent {
		syntax: "<color>";
		inherits: true;
		initial-value: white;
	}

	@keyframes accent {
		0%, 100% {
			--accent: var(--blue);
		}
		12% {
			--accent: var(--indigo);
		}
		25% {
			--accent: var(--violet);
		}
		36% {
			--accent: var(--red);
		}
		50% {
			--accent: var(--orange);
		}
		75% {
			--accent: var(--yellow);
		}
		86% {
			--accent: var(--green);
		}
	}

	.semantic {
		/* Font Families: */
		--font: "Inter", sans-serif;
		--monospace-font: "Ubuntu Mono", monospace;
		--display-font: "Ubuntu", sans-serif;
		--accent-font: "Satisfy", cursive;
		/* Line Heights: */
		--line-height: 1.75;
		--display-line-height: 1.25;
		/* Colors: */
		--primary: oklch(0.95 0.02 20);
		--accent: var(--blue);
		/** Light-Dark Support: */
		@supports (color: light-dark(white, black)) {
			color-scheme: light dark;
			--primary: light-dark(oklch(0.95 0.02 20), var(--gray));
			--accent: light-dark(var(--blue), var(--indigo));
		}
		/* Accent Animation: */
		@media not (prefers-reduced-motion) {
			animation: accent 12s infinite linear;
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

	::selection {
		background-color: var(--accent-200-500);
		background-color: oklch(from var(--accent-200-500) l c h / var(--x-low-opacity));
		color: var(--secondary-800-100);
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
		padding-top: var(--small-size);
		padding-right: max(var(--responsive-size), var(--safe-right) + var(--small-size));
		padding-bottom: var(--x-small-size);
		padding-left: max(var(--responsive-size), var(--safe-left) + var(--small-size));
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
		display: inline-block;
		background-image: linear-gradient(var(--accent-500-300), var(--accent-600-400));
		background-clip: text;
		color: var(--accent-500-300);
		-webkit-text-fill-color: transparent;
		text-decoration-line: none;
		&:is(:hover, :focus):not(:active) {
			background-image: linear-gradient(var(--accent-400-200), var(--accent-500-300));	
			color: var(--accent-400-200);
		}
	}
</style>