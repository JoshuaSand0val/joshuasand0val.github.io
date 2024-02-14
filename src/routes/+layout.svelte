<script>
	import "../styles/app.css";
</script>

<svelte:head>
    <title>Hey, Jes!</title> 
</svelte:head>

<main>
	<slot></slot>
</main>

<style>
	main {
		display: block;
		container: main / inline-size;
		max-width: var(--width-3xl);
		border-width: var(--safe-main);
		border-style: solid;
		border-color: transparent;
		padding: var(--space-s-2xl);
		margin: 0 auto;
	}
</style>