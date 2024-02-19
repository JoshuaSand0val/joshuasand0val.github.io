<script>
	import projects from "./projects.json";
</script>

<div class="container">
	<h1>My Projects</h1>
	<div class="grid">
		{#each projects as { title, image, description, url }}
		<article class="project">
			<h2 class="title">{title}</h2>
			<a class="portal" href={url}>
				<img src={image} alt="" />
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
		--max: calc(100% / 3);
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
			margin: var(--space-xs-s) var(--space-3xs-2xs) 0;
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
			object-fit: cover;
			object-position: top center;
			border-radius: 8px;
			border: 3px solid var(--bg-color-2);
			overflow: hidden;
			margin-right: 0;
			margin-left: 0;
			transition: transform 150ms ease-out;
			&:hover, &:focus {
				transform: scale(1.01);
			}
			&, &:active {
				transform: none;
			}
			img {
				width: 100%;
			}
		}
		.description {
			display: block;
			font-size: var(--font-m);
		}
	}
</style>