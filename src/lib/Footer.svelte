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
		max-width: var(--3x-large-container);
		padding-right: max(var(--responsive-size), var(--safe-right) + var(--small-size));
		padding-bottom: max(var(--large-size), var(--safe-bottom));
		padding-left: max(var(--responsive-size), var(--safe-left) + var(--small-size));
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
		font-size: var(--small-font);
		margin-right: auto;
		span {
			display: block;
		}
	}

	.top {
		position: fixed;
		z-index: var(--fixed-index);
		bottom: max(var(--medium-size), var(--safe-bottom));
		font-size: var(--x-large-size);
		line-height: 0;
		transition-property: visibility, transform, opacity;
		transition-timing-function: ease-out;
		transition-duration: var(--fast-time);
		cursor: pointer;
		&.hidden {
			pointer-events: none;
			visibility: hidden;
			opacity: 0;
		}
		&:active {
			transition-duration: var(--swift-time);
		}
		&:active,
		&.hidden {
			transform: scale(0.95);
		}
	}
</style>