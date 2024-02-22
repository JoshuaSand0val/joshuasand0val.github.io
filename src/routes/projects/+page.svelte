<script>
	import projects from "./projects.json";
	import Meta from "$lib/Meta.svelte";
</script>

<Meta title="Projects" description="The various projects undertaken by Joshua Elijah Sandoval." />

<!-- Project images must be of a viewport of 1200/800 CSS pixels. -->

<div class="container">
	<h1>My Projects</h1>
	<div class="grid">
		{#each projects as { title, image, imageDark, description, url }}
		<article class="project">
			<h2 class="title">{title}</h2>
			<a class="portal" href={url} target="_blank">
				{#if [image, imageDark].every(i => typeof i === "string")}
				<img src={image} loading="lazy" class="system light" alt="" />
				<img src={imageDark} loading="lazy" class="system dark" alt="" />
				{:else if typeof image === "string"}
				<img src={image} loading="lazy" alt="" />
				{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="-16 -16 48 48">
					<path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
					<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>				  
				</svg>
				{/if}
			</a>
			<p class="description">{description}</p>
		</article>
		{/each}
	</div>
</div>

<style>
	h1 {
		display: block;
		font-size: var(--font-3xl);
		margin: 0;
	}
	
	.grid {
		--gap: var(--space-m-l);
		--min: var(--width-xs);
		--max: calc(100% / 4);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(clamp(calc(var(--max) - var(--gap)), var(--min), 100%), 1fr));
		gap: var(--gap);
		margin: var(--space-m-l) 0;
	}

	.project {
		display: block;
		container-type: inline-size;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
		.title, .portal, .description {
			margin: var(--space-xs-s) 0 0;
			&:first-child {
				margin-top: 0;
			}
		}
		.title {
			display: block;
			font-size: var(--font-2xl);
		}
		.portal {
			position: relative;
			display: block;
			width: 100%;
			aspect-ratio: 3 / 2;
			border-radius: 3px;
			overflow: hidden;
			margin-right: 0;
			margin-left: 0;
			transition: transform 150ms ease-out;
			background-color: var(--bg-color-1);
			background-image: linear-gradient(123deg, var(--bg-color-2), var(--bg-color-1));
			color: var(--color);
			&:hover, &:focus {
				transform: scale(1.02);
			}
			&, &:active {
				transform: none;
			}
			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: top center;
			}
		}
		.description {
			display: block;
			font-size: var(--font-m);
		}
	}
</style>