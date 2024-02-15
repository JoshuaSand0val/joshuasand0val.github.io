<script>
	import "../styles/root.css";
</script>

<footer class="container">
	<div class="wrapper">
		<div class="info">
			<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
			<span>Site built with <a target="_blank" href="https://svelte.dev">Svelte</a>.</span>
		</div>
		<a href="#top" aria-label="To top of page" class="top">
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
		position: absolute;
		z-index: var(--z-overlay);
		right: var(--space-s-2xl);
		bottom: var(--space-m-l);
		font-size: var(--font-xl);
		line-height: 1;
	}
</style>