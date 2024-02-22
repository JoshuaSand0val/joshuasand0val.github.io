<script>
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
			<svg
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
				width="1em" height="1em"
				fill="currentColor">
				<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
			</svg>
		</a>
		<!-- Theme toggle: -->
		<button aria-label="Swap current theme" class="toggle" bind:this={themeToggleButton}>
			<svg
				class="system" aria-label="Swap from system theme"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
				width="1em" height="1em"
				fill="currentColor">
				<path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
			</svg>
			<svg
				class="light" aria-label="Swap from light theme"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
				width="1em" height="1em"
				fill="currentColor">
				<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
			</svg>
			<svg
				class="dark" aria-label="Swap from dark theme"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
				width="1em" height="1em"
				fill="currentColor">
				<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
				<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
			</svg>
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