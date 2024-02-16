<script>
    import { onMount } from "svelte";

	/** @type {boolean} Boolean for if there is a visible vertical scrollbar. */
	let scrollbarVisible = false;
	onMount(() => {
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
	});
</script>

<footer class="container">
	<div class="wrapper">
		<div class="info">
			<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
			<span>Site built with <a target="_blank" href="https://svelte.dev">Svelte</a>.</span>
		</div>
		<a href="#top" aria-label="To top of page" class="top" data-show={scrollbarVisible}>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
				<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
			</svg>
		</a>
	</div>
</footer>

<style>
	.container {
		display: block;
		width: 100%;
		max-width: var(--width-3xl);
		padding: var(--safe-footer);
		margin: auto auto 0;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-flow: row wrap;
		padding: 0 var(--space-s-2xl) var(--space-m-l);
		margin-top: var(--space-s-2xl);
	}

	.info {
		display: block;
		font-size: var(--font-s);
		margin-right: auto;
		span {
			display: block;
		}
	}

	.top {
		position: fixed;
		z-index: var(--z-fixed);
		right: var(--space-s-2xl);
		bottom: var(--space-m-l);
		font-size: var(--font-xl);
		line-height: 1;
		filter: drop-shadow(0 0 8px var(--bg-color-1));
		&:not(:active) {
			transition:
				transform 150ms ease-out,
				opacity 150ms ease-in;
		}
		&:active,
		&[data-show="false"] {
			transform: scale(0.9);
		}
		&[data-show="false"] {
			pointer-events: none;
			opacity: 0;
		}
	}
</style>