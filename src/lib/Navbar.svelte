<script>
	import { page } from "$app/stores";

	/** @type {string} Current page path. */ 
	$: path = $page.url.pathname;
</script>

<header class="container">
	<div class="wrapper">
		<h2 class="brand">
			<a href="/">Hey, Jes!</a>
		</h2>
		<nav id="nav">
			<a href="/" class:active={path === "/"}>Home</a>
			<a href="/about" class:active={path === "/about"}>About</a>
			<a href="/projects" class:active={path === "/projects"}>Projects</a>
			<a href="https://github.com/joshuasand0val" target="_blank">Github</a>
			<a href="https://linkedin.com/in/joshuasand0val/" target="_blank">Linkedin</a>
		</nav>
	</div>
</header>

<style>
	a:not(:active, .active) {
		color: inherit;
	}

	.container {
		position: sticky;
		top: 0;
		z-index: var(--sticky-index);
		display: flex;
		flex-flow: row nowrap;
		background-color: var(--neutral-50-800);
		border-bottom: 1px dashed var(--neutral-200-700);
		overflow: auto;
		@media not (prefers-reduced-transparency) {
			background-color: oklch(from var(--neutral-50-800) l c h / var(--low-opacity));
			backdrop-filter: var(--heavy-blur);
		}
	}

	.wrapper {
		display: inline-flex;
		flex-flow: row nowrap;
		align-items: center;
		max-width: var(--3xl-container);
		gap: var(--md-size);
		flex: 1 1 auto;
		padding-top: var(--safe-top);
		padding-right: max(var(--responsive-size), var(--safe-right) + var(--md-size));
		padding-left: max(var(--responsive-size), var(--safe-left) + var(--md-size));
		margin: 0 auto;
	}

	.brand {
		display: inline;
		font-size: var(--xl-font);
		font-family: var(--accent-font);
		white-space: nowrap;
		background: linear-gradient(123deg, var(--primary-500-300), var(--neutral-600-400));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: var(--sm-size) 0 var(--xs-size);
		a {
			text-decoration: none;
		}
	}

	#nav {
		display: flex;
		flex-flow: row nowrap;
		gap: inherit;
		font-size: var(--sm-font);
		margin-left: auto;
	}
</style>