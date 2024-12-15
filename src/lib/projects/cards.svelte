<script>
	import "bootstrap-icons/font/bootstrap-icons.min.css";
	import projects from "./projects.json";
</script>

<!-- Project images must be of a viewport of 1200/800 CSS pixels. -->

<div class="grid">
	{#each projects as { title, image, description, url }}
	<div class="grid-item">
		<article class="project">
			<h2 class="project-title">{title}</h2>
			{#if typeof image === "string"}
			<a class="project-portal" href={url} target="_blank">
				<img src={image} loading="lazy" alt="" />
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

<style>
	.grid {
		display: block;
		column-count: 4;
		column-width: var(--2x-small-container);
		column-gap: var(--small-size);
		column-fill: balance;
		margin: var(--medium-size) 0;
	}

	.grid-item {
		display: block;
		break-inside: avoid;
		padding-bottom: var(--small-size);
		&:last-child {
			padding-bottom: 0;
		}
	}

	.project {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		border-radius: var(--3x-small-size);
		border: 1px dashed var(--primary-300-600);
		background-color: var(--primary-50-800);
		padding: var(--small-size) 0 var(--x-small-size);
		gap: var(--x-small-size) 0;
	}

	.project-title,
	.project-portal,
	.project-description,
	.project-link {
		display: block;
		margin: 0 var(--small-size);
	}

	.project-title {
		font-size: var(--x-large-font);
	}

	.project-portal {
		position: relative;
		z-index: var(--relative-index);
		aspect-ratio: 3 / 2;
		width: 100%;
		border-radius: inherit;
		margin: 0;
		transition: all var(--fast-time) ease-out;
		overflow: hidden;
		&:hover, &:focus,
		.project:has(a[href]:is(:hover, :focus)) & {
			background-color: inherit;
			filter: var(--medium-shadow);
			transform: scale(1.05);
		}
		&, &:active,
		.project:has(a[href]:active) & {
			transition-duration: var(--swift-time);
			transform: scale(1.02);
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