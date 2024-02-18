<div class="container">
	<h1>My Projects</h1>
	<div class="grid">
		{#each Array(5) as _}
		<article class="project">
			<h2 class="title">Awesome Project</h2>
			<picture>
				<source
					srcset="https://placehold.co/600x400/222/FFF/?text=Website+Screenshot"
					media="(prefers-color-scheme: dark)">
				<img
					class="portal"
					src="https://placehold.co/600x400/EEE/000/?text=Website+Screenshot"
					alt="">
			</picture>
			<p class="description">An upcoming project utilizing awesome web technologies.</p>
		</article>
		{/each}
	</div>
</div>

<style>
	h1 {
		display: block;
		text-align: center;
		font-size: var(--font-3xl);
		margin: 0 0 var(--space-m-l);
	}
	
	.grid {
		--gap: var(--space-m-l);
		--min: var(--width-xs);
		--max: calc(100% / 3);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(clamp(calc(var(--max) - var(--gap)), var(--min), 100%), 1fr));
		gap: var(--gap);
		margin: var(--space-l-xl) 0;
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
			font-size: var(--font-xl);
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
		}
		.description {
			display: block;
			font-size: var(--font-m);
		}
	}
</style>