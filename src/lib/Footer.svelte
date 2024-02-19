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

		// Initially run scrollbar listener:
		scrollbarListener();

		// Watch for scrollbar visibility when scrolling or resizing document window:
		document.addEventListener("scroll", scrollbarListener);
		window.addEventListener("resize", scrollbarListener);

		/* Sitewide theme switcher logic: */

		/** Media for currently preferred color scheme. */
		const media = window.matchMedia("(prefers-color-scheme: light)");

		/** Currently preferred color scheme. */
		const preferred = () => media.matches ? "light" : "dark";

		// Set preferred media as a default theme:
		media.addEventListener("change", () => {
			if(localStorage.hasItem("theme")) return;
			root.setAttribute("data-theme", preferred());
		});

		/** Stored theme or preferred media. */
		const stored = () => localStorage.getItem("theme") ?? preferred();

		// Set sitewide theme to what is stored across tabs:
		window.addEventListener("storage", () => {
			root.setAttribute("data-theme", stored());
		});

		// Initially dispatch storage event:
		window.dispatchEvent(new Event("storage"));

		// Switch theme between light and dark on toggle button click:
		themeToggleButton.addEventListener("click", () => {
			/** Invert of theme currently stored. */
			const newTheme = stored() === "dark" ? "light" : "dark";
			// Set data-theme attribute on root element to new theme:
			root.setAttribute("data-theme", newTheme);
			// Update local storage with new theme:
			localStorage.setItem("theme", newTheme);
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
		<a href="#top" aria-label="To top of page" class="top" data-show={scrollbarVisible}>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
			</svg>
		</a>
		<!-- Theme toggle: -->
		<button class="toggle" bind:this={themeToggleButton}>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
			</svg>
		</button>
	</div>
</footer>

<style>
	.container {
		display: block;
		width: 100%;
		max-width: var(--width-3xl);
		padding: var(--safe-footer);
		margin: 0 auto;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-flow: row wrap;
		padding: 0 var(--space-s-2xl) var(--space-m-l);
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
		right: calc(var(--space-s-2xl) + var(--safe-right));
		bottom: calc(var(--space-m-l) + var(--safe-bottom));
		font-size: var(--font-xl);
		line-height: 0;
		filter: drop-shadow(0 0 8px var(--bg-color-1));
		cursor: pointer;
	}

	.toggle {
		appearance: none;
		border: none;
		background-color: transparent;
		color: inherit;
		padding: 0;
		margin: 0;
		transform: rotate(180deg);
		transition: transform 250ms ease-out;
		:global(:root[data-theme="light"]) & {
			transform: none;
		}
	}

	.top {
		margin-right: var(--space-xs-s);
		transform: translateX(-100%);
		&:not(:active) {
			transition:
				visibility 150ms ease-out,
				transform 150ms ease-out,
				opacity 150ms ease-in;
		}
		&[data-show="false"] {
			pointer-events: none;
			visibility: hidden;
			opacity: 0;
		}
		&:active,
		&[data-show="false"] {
			transform: translateX(-100%) scale(0.9);
		}
	}
</style>