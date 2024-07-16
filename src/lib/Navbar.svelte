<script>
	import { page } from "$app/stores";

	/** @type {string} Current page path. */ 
	$: path = $page.url.pathname;
</script>

<header class="container --semantic">
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
	a {
		color: var(--text-color);
		&.active {
			color: var(--1st-color);
		}
	}

	.container {
		--bg-color: var(--theme-color) / 0.5;
		position: sticky;
		top: 0;
		z-index: var(--sticky-layer);
		display: flex;
		flex-flow: row nowrap;
		border-bottom: 2px dashed var(--3rd-bg-color);
		background-color: var(--1st-bg-color);
		backdrop-filter: blur(8px);
		overflow: auto;
	}

	.wrapper {
		display: inline-flex;
		flex-flow: row nowrap;
		align-items: center;
		max-width: var(--3xl-breakpoint);
		gap: var(--md-size);
		flex: 1 1 auto;
		transition: padding var(--fast-timing) ease-out;
		padding-top: var(--safe-top);
		padding-right: max(var(--responsive-size), var(--safe-right) + var(--sm-size));
		padding-left: max(var(--responsive-size), var(--safe-left) + var(--sm-size));
		margin: 0 auto;
	}

	.brand {
		display: inline;
		font-size: var(--lg-font);
		font-family: var(--brand-font);
		white-space: nowrap;
		margin: var(--sm-size) 0;
		a {
			text-decoration: none;
		}
	}

	#nav {
		display: flex;
		flex-flow: row nowrap;
		gap: inherit;
		font-weight: var(--bold-font);
		font-size: var(--sm-font);
		margin-left: auto;
	}
</style>