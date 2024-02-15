<script>
	import "../styles/root.css";
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
			<a href="https://github.com/JoshuaSand0val">Github</a>
			<a href="/contact" class:active={path === "/contact"}>Contact</a>
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
		display: block;
		backdrop-filter: blur(24px);
		padding: var(--safe-header);
		overflow: auto;
	}

	.wrapper {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		max-width: var(--width-3xl);
		gap: var(--space-s);
		padding: 0 var(--space-s-2xl);
		margin: 0 auto;
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