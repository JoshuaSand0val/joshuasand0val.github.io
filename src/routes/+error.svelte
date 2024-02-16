<script>
	import { page } from "$app/stores";
</script>

<div class="container">
	<span class="status" role="presentation">{$page.status}</span>
	<h1 class="message">{$page.error?.message ?? "Uhh Oh!"}</h1>
	<a href="/">&larr; Back to Home</a>
</div>

<style>
	.container {
		position: relative;
		display: block;
		font-weight: 900;
		text-align: center;
		margin: auto;
	}

	.status {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: var(--z-underlay);
		transform: translate(-50%, -50%);
		display: block;
		font-family: var(--font-display);
		font-size: clamp(var(--font-4xl), 60cqi, 60cqb);
		user-select: none;
		opacity: 0.05;
	}

	.message {
		display: block;
		font-size: var(--font-4xl);
		margin: 0;
	}
</style>