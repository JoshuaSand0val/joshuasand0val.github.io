<script>
	import "bootstrap-icons/font/bootstrap-icons.min.css";
	import { scrollbarVisible } from "./ScrollbarVisible.svelte";
</script>

<footer class="container">
	<div class="wrapper">
		<!-- Site info: -->
		<div class="info">
			<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
			<span>Site built with <a target="_blank" href="https://svelte.dev">Svelte</a>.</span>
		</div>
		<!-- Back to top of page link: -->
		<a href="#top" class="top" class:hidden={!$scrollbarVisible} aria-label="To top of page">
			<i class="bi bi-arrow-up-circle-fill"></i>
		</a>
	</div>
</footer>

<style>
	.container {
		display: block;
		width: 100%;
		max-width: var(--3xl-breakpoint);
		transition: padding var(--fast-timing) ease-out;
		padding-right: max(var(--responsive-size), var(--safe-right) + var(--sm-size));
		padding-bottom: max(var(--lg-size), var(--safe-bottom));
		padding-left: max(var(--responsive-size), var(--safe-left) + var(--sm-size));
		margin: 0 auto;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-end;
	}

	.info {
		display: block;
		font-size: var(--sm-font);
		margin-right: auto;
		span {
			display: block;
		}
	}

	.top {
		position: fixed;
		z-index: var(--fixed-layer);
		bottom: max(var(--md-size), var(--safe-bottom));
		font-size: var(--lg-size);
		line-height: 0;
		transition-property: visibility, transform, opacity;
		transition-timing-function: ease-out;
		transition-duration: var(--fast-timing);
		filter: drop-shadow(0 0 8px var(--1st-theme-bg-color));
		cursor: pointer;
		&.hidden {
			pointer-events: none;
			visibility: hidden;
			opacity: 0;
		}
		&:active {
			transition-duration: var(--swift-timing);
		}
		&:active,
		&.hidden {
			transform: scale(0.9);
		}
	}
</style>