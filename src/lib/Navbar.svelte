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
	a {
		color: var(--color);
		&.active {
			color: var(--color-accent);
		}
	}

	.container {
		position: sticky;
		top: 0;
		z-index: var(--z-overlay);
		display: flex;
		flex-flow: row nowrap;
		overflow: visible;
		&::before {
			content: "";
			position: absolute;
			inset: 0;
			z-index: var(--z-underlay);
			backdrop-filter: blur(3px);
			mask-image: linear-gradient(to bottom, red, transparent);
		}
	}

	.wrapper {
		display: inline-flex;
		flex-flow: row nowrap;
		align-items: center;
		max-width: var(--width-3xl);
		gap: var(--space-s);
		flex: 1 1 auto;
		border-width: var(--safe-header);
		border-style: solid;
		border-color: transparent;
		padding: 0 var(--space-s-2xl);
		margin: 0 auto;
		overflow: auto;
		filter:
			drop-shadow(0 0 6px var(--bg-color-3))
			drop-shadow(0 0 12px var(--bg-color-2))
			drop-shadow(0 0 24px var(--bg-color-1));
	}

	.brand {
		display: inline;
		font-size: var(--font-xl);
		font-family: var(--font-brand);
		white-space: nowrap;
		background: linear-gradient(123deg, var(--color), var(--color-accent));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		a {
			text-decoration: none;
		}
	}

	#nav {
		display: flex;
		flex-flow: row nowrap;
		gap: inherit;
		font-size: var(--font-s);
		font-weight: 600;
		margin-left: auto;
	}
</style>