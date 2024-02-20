<script>
	/** @type {string} - Title of current webpage. */
	export let title;
	/** @type {string} - Description of current webpage. */
	export let description;
</script>

<svelte:head>
	<title>{title} | Hey, Jes!</title> 
	<meta name="description" content={description} />
</svelte:head>