<script>
	import "bootstrap-icons/font/bootstrap-icons.min.css";
	import { onMount } from "svelte";

	/** @type {boolean} Boolean for if there is a visible vertical scrollbar. */
	let scrollbarVisible = false;

	/** @type {HTMLButtonElement} - Sitewide theme toggle button. */
	let themeToggleButton;

	onMount(() => {
		/* Back to top of page link logic: */
	
		/** @type {HTMLElement} Root HTML element. */
		const root = document.documentElement;

		/** Listener for if scrollbar is visible. */
		const scrollbarListener = () => {
			scrollbarVisible = root.scrollHeight > root.offsetHeight && window.scrollY !== 0;
		};

		// Watch for scrollbar visibility when scrolling or resizing document window:
		document.addEventListener("scroll", scrollbarListener);
		window.addEventListener("resize", scrollbarListener);

		/* Sitewide theme switcher logic: */

		/** @returns {string} Gets stored theme or "system" as fallback. */
		const storedTheme = () => localStorage.getItem("theme") ?? "system";

		/** Renders currently stored theme to document root. */
		const renderTheme = () => root.setAttribute("data-theme", storedTheme());

		// Initially render theme:
		renderTheme();

		// Render theme across tabs on storage update:
		window.addEventListener("storage", renderTheme);

		/** @returns {boolean} Returns boolean for if preferred color scheme is light. */
		const prefersLight = () => window.matchMedia("(prefers-color-scheme: light)").matches;

		// Switch between system, light and dark themes on toggle click:
		themeToggleButton.addEventListener("click", () => {
			/** @type {string} New theme based on what is currently stored. */
			const newTheme = (() => {
				switch (storedTheme()) {
					case "system": return prefersLight() ? "light" : "dark";
					case "light": return prefersLight() ? "dark" : "system";
					case "dark": return prefersLight() ? "system" : "light";
					default: return "system";
				}
			})();

			// Update stored theme:
			localStorage.setItem("theme", newTheme);

			// Render theme update:
			renderTheme();
		});
	});
</script>

<footer class="container">
	<div class="wrapper">
		<!-- Site info: -->
		<div class="info">
			<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
			<span>Site built with <a target="_blank" href="https://svelte.dev">Svelte</a>.</span>
		</div>
		<!-- Back to top of page link: -->
		<a href="#top" class="top" class:hidden={!scrollbarVisible} aria-label="To top of page">
			<i class="bi bi-arrow-up-circle-fill"></i>
		</a>
		<!-- Theme toggle: -->
		<button aria-label="Swap current theme" class="toggle" bind:this={themeToggleButton}>
			<i class="system bi bi-circle-half" aria-label="Swap from system theme"></i>
			<i class="light bi bi-brightness-high-fill" aria-label="Swap from light theme"></i>
			<i class="dark bi bi-moon-stars-fill" aria-label="Swap from dark theme"></i>
		</button>
	</div>
</footer>

<style>
	.container {
		display: block;
		width: 100%;
		max-width: var(--width-3xl);
		padding-right: max(var(--space-s-2xl), var(--safe-right) + var(--space-xs-s));
		padding-bottom: max(var(--space-m-l), var(--safe-bottom));
		padding-left: max(var(--space-s-2xl), var(--safe-left) + var(--space-xs-s));
		margin: 0 auto;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-flow: row wrap;
	}

	.info {
		display: block;
		font-size: var(--font-s);
		margin-right: auto;
		span {
			display: block;
		}
	}

	.toggle, .top {
		position: fixed;
		z-index: var(--z-fixed);
		right: max(var(--space-s-2xl), var(--safe-right) + var(--space-xs-s));
		bottom: max(var(--space-m-l), var(--safe-bottom));
		font-size: var(--space-l);
		line-height: 0;
		transition-property: visibility, transform, opacity;
		transition-timing-function: ease-out;
		transition-duration: 200ms;
		filter: drop-shadow(0 0 8px var(--bg-color-1));
		cursor: pointer;
		&:active {
			transition-duration: 0ms;
		}
	}

	.top.hidden {
		pointer-events: none;
		visibility: hidden;
		opacity: 0;
	}

	:is(.toggle, .top):active,
	.top.hidden {
		transform: scale(0.9);
	}

	.toggle {
		appearance: none;
		border: none;
		background-color: transparent;
		color: inherit;
		padding: 0;
		margin: 0;
	}

	.top {
		margin-right: calc(var(--space-2xs-xs) + 1em);
	}
</style>