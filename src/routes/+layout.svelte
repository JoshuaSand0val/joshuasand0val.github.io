<script>
	import "../styles/app.css";
	import Navbar from "$lib/Navbar.svelte";
</script>

<svelte:head>
    <title>Hey, Jes!</title> 
</svelte:head>

<Navbar />
<main>
	<slot></slot>
</main>

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		container: main / inline-size;
		width: 100%;
		max-width: var(--width-3xl);
		border-width: var(--safe-main);
		border-style: solid;
		border-color: transparent;
		padding: var(--space-2xs) var(--space-s-2xl);
		flex: 1 0 auto;
		margin: 0 auto;
	}
</style>