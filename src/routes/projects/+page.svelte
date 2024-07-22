<script>
	import "bootstrap-icons/font/bootstrap-icons.min.css";
	import projects from "./projects.json";
	import Meta from "$lib/Meta.svelte";
</script>

<Meta title="Projects" description="The various projects undertaken by Jes." />

<!-- Project images must be of a viewport of 1200/800 CSS pixels. -->

<div class="container">
	<h1>My Projects</h1>
	<div class="grid">
		{#each projects as { title, image, imageDark, description, url }}
		<div class="grid-item">
			<article class="project">
				<h2 class="project-title">{title}</h2>
				{#if typeof image === "string"}
				<a class="project-portal" href={url} target="_blank">
					{#if [image, imageDark].every(i => typeof i === "string")}
					<img class="--semantic light" src={image} loading="lazy" alt="" />
					<img class="--semantic dark" src={imageDark} loading="lazy" alt="" />
					{:else}
					<img src={image} loading="lazy" alt="" />
					{/if}
				</a>
				{/if}
				<p class="project-description">{description}</p>
				<span class="project-link">
					<a href={url} target="_blank">
						Learn More <i class="bi bi-chevron-right"></i>
					</a>
				</span>
			</article>
		</div>
		{/each}
	</div>
</div>

<style>
	h1 {
		margin: 0;
	}

	.grid {
		display: block;
		column-count: 4;
		column-width: var(--xs-breakpoint);
		column-gap: var(--sm-size);
		column-fill: balance;
		margin: var(--md-size) 0;
	}

	.grid-item {
		display: block;
		break-inside: avoid;
		padding-bottom: var(--sm-size);
		&:last-child {
			padding-bottom: 0;
		}
	}

	.project {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		border-radius: var(--2xs-size);
		border: 1px dashed var(--3rd-theme-bg-color);
		background-color: var(--1st-theme-bg-color);
		background-image: linear-gradient(123deg, var(--1st-theme-bg-color) -35%, var(--2nd-theme-bg-color) 135%);
		box-shadow: 0 4px 16px -8px var(--theme-color-300);
		padding: var(--sm-size) 0;
		gap: var(--sm-size) 0;
		:global(.--dark-color) & {
			box-shadow: 0 4px 16px -8px var(--theme-color-950);
		}
	}

	.project-title,
	.project-portal,
	.project-description,
	.project-link {
		display: block;
		margin: 0 var(--sm-size);
	}

	.project-title {
		font-size: var(--xl-font);
	}

	.project-portal {
		position: relative;
		z-index: var(--relative-layer);
		aspect-ratio: 3 / 2;
		width: 100%;
		margin: 0;
		transition: all var(--fast-timing) ease-out;
		overflow: hidden;
		&:hover, &:focus,
		.project:has(a[href]:is(:hover, :focus)) & {
			background-color: inherit;
			border-radius: inherit;
			box-shadow: inherit;
			transform: scale(1.05);
		}
		&, &:active,
		.project:has(a[href]:active) & {
			transition-duration: var(--swift-timing);
			box-shadow: none;
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

	.project-description {
		margin-top: auto;
	}

	.project-link {
		text-align: right;
		border-top: inherit;
		padding-top: inherit;
	}
</style>