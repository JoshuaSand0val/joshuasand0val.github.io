<script>
	import { page } from "$app/stores";
	/** @type {string} - Title of current webpage. */
	export let title;
	/** @type {string} - Description of current webpage. */
	export let description;
</script>

<svelte:head>
	<title>{title} | Hey, Jes!</title> 
	<meta name="description" content={description} />
	<!-- Open Graph: -->
	<meta property="og:site_name" content="Hey, Jes!" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/opengraph.png" />
	<meta property="og:url" content="https://heyjes.dev{$page.url.pathname}" />
</svelte:head>