<script>
	import { page } from "$app/stores";
	import Meta from "$lib/Meta.svelte";
</script>

<Meta title="Error" description="Something went wrong... an error occurred." />

<div class="container">
	<span class="status" role="presentation">{$page.status}</span>
	<h1 class="message">{$page.error?.message ?? "Uhh Oh!"}</h1>
	<a href="/">Forward to Home <i class="bi bi-chevron-right"></i></a>
</div>

<style>
	.container {
		position: relative;
		display: block;
		text-align: center;
		margin: auto;
	}

	.status {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: var(--bottom-layer);
		transform: translate(-50%, -48%);
		display: block;
		font-family: var(--display-font);
		font-size: clamp(var(--4xl-font), 60cqi, 60cqb);
		font-weight: var(--heavy-font);
		user-select: none;
		opacity: 0.05;
	}

	.message {
		display: block;
		font-size: var(--4xl-font);
		margin: 0;
	}
</style>