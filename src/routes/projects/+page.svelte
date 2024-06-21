<script>
	import "bootstrap-icons/font/bootstrap-icons.min.css";
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
				<picture>
					<source srcset={imageDark} media="(prefers-color-scheme: dark)">
					<img src={image} loading="lazy" alt="" />
				</picture>
				{:else if typeof image === "string"}
				<img src={image} loading="lazy" alt="" />
				{:else}
				<svg fill="currentColor" viewBox="-16 -16 48 48">
					<path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
					<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
				</svg>
				{/if}
			</a>
			<p class="description">{description}</p>
			<span class="learn-more">
				<a href={url} target="_blank">
					Learn More <i class="bi bi-chevron-right"></i>
				</a>
			</span>
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
		--gap: var(--space-xs-s);
		--min: var(--width-xs);
		--max: calc(100% / 3);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(clamp(var(--max) - var(--gap), var(--min), 100%), 1fr));
		align-items: stretch;
		gap: var(--gap);
		margin: var(--space-m-l) 0;
	}

	.project {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		container-type: inline-size;
		border: 2px dashed var(--bg-color-3);
		border-radius: var(--space-3xs-2xs);
		background-color: var(--bg-color-1);
		padding: var(--space-s) 0;
		gap: var(--space-xs-s) 0;
		.title, .portal, .description, .learn-more {
			display: block;
			font-size: var(--font-m);
			margin: 0 var(--space-s);
		}
		.title {
			font-size: var(--font-2xl);
		}
		.portal {
			position: relative;
			z-index: var(--z-overlay);
			aspect-ratio: 3 / 2;
			width: 100%;
			margin: 0;
			transition: transform 100ms ease-out;
			border: 1px dashed var(--bg-color-3);
			background-color: inherit;
			color: var(--color);
			overflow: hidden;
			&:hover, &:focus {
				border-radius: inherit;
				transform: scale(1.03);
				color: var(--color-accent);
			}
			&, &:active {
				transform: none;
			}
			img, svg {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: top center;
			}
		}
		.learn-more {
			text-align: right;
			border-top: 1px solid var(--bg-color-2);
			padding-top: inherit;
			margin-top: auto;
		}
	}
</style>