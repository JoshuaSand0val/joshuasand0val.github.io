<script>
	import "../styles/app.css";
	import Navbar from "$lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<Navbar />
<main>
	<slot></slot>
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		container-type: inline-size;
		width: 100%;
		max-width: var(--width-3xl);
		padding-top: var(--space-2xs-xs);
		padding-right: max(var(--space-s-2xl), var(--safe-right) + var(--space-xs-s));
		padding-bottom: var(--space-2xs-xs);
		padding-left: max(var(--space-s-2xl), var(--safe-left) + var(--space-xs-s));
		flex: 1 0 auto;
		margin: 0 auto;
	}
</style>