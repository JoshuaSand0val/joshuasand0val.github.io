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
	@import url('https://fonts.googleapis.com/css2?family=Halant:wght@400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Satisfy&display=swap');

	.--semantic {
		/* Font Families: */
		--font: "Montserrat", sans-serif;
		--display-font: "Halant", serif;
		--brand-font: "Satisfy", cursive;
		/* Color Palette: */
		@media (--prefers-light-color) {
			--theme-color: 20;
			--bg-color-chroma: 0.05;
		}
	}

	:root {
		position: absolute;
		inset: 0;
		display: block;
		min-height: 100%;
		font-family: var(--font);
		line-height: var(--font-leading);
		background-color: var(--1st-bg-color);
		background-image: linear-gradient(0deg,
			var(--1st-bg-color) 50%,
			var(--2nd-bg-color) 50%
		);
		background-size: 100% var(--2xs-size);
		background-repeat: repeat-y;
		color: var(--text-color);
		scroll-behavior: smooth;
		transition-property: background-color, color;
		transition-duration: var(--fast-timing);
		transition-timing-function: ease-out;
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
		max-width: var(--3xl-breakpoint);
		transition: padding var(--fast-timing) ease-out;
		padding-top: var(--md-size);
		padding-right: max(var(--responsive-size), var(--safe-right) + var(--sm-size));
		padding-bottom: var(--xs-size);
		padding-left: max(var(--responsive-size), var(--safe-left) + var(--sm-size));
		flex: 1 0 auto;
		margin: 0 auto;
		@media (--xl-breakpoint) {
			padding-top: var(--lg-size);
		}
	}

	h1, h2, h3, h4, h5, h6 {
		transition: font-size var(--fast-timing) ease-out;
		font-family: var(--display-font);
		line-height: var(--display-font-leading);
		margin: var(--sm-size) 0;
	}

	h1 {
		font-size: var(--3xl-font);
	}

	h2 {
		font-size: var(--2xl-font);
	}

	h3 {
		font-size: var(--xl-font);
	}

	h4 {
		font-size: var(--lg-font);
	}

	h5 {
		font-size: var(--md-font);
	}

	h6 {
		font-size: var(--sm-font);
	}

	small, sup, sub {
		font-size: var(--smaller-font);
	}

	a[href] {
		display: inline;
		color: var(--1st-color);
		&:not(:hover, :focus) {
			text-decoration-line: none;
		}
	}
</style>