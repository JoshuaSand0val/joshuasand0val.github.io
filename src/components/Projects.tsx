import { styled } from "@linaria/react";

/** Data for all projects. */
const projects: {
	title: string,
	description: string
	url: string
	image?: string
}[] = [
	{
		"title": "Semantic Props",
		"description": "A collection of semantic CSS custom properties.",
		"url": "https://semantic-props.style/",
		"image": "/projects/semantic-props.png"
	},
	{
		"title": "Precolor",
		"description": "A collection of color manipulation tools written in Sass (SCSS).",
		"url": "https://github.com/JoshuaSand0val/Precolor"
	}
];

/** Listing of all affiliated projects. */
// Images must be of a viewport of 1200/800 CSS pixels.
export default function Projects() {
	const Grid = styled.div`
		display: flex;
		flex-flow: row nowrap;
		border-radius: var(--small);
		gap: var(--small);
		margin-block: var(--2x-large);
		scroll-snap-type: inline mandatory;
		overflow: auto;
		&:target {
			outline: var(--3x-small) solid var(--low-contrast-color);
			outline-offset: var(--3x-small);
		}
	`;

	const Project = styled.article`
		position: relative;
		z-index: 0;
		display: block;
		inline-size: min(100%, var(--medium-container));
		border-radius: var(--small-radius);
		background-color: var(--gray-900);
		background-image: linear-gradient(to bottom right, var(--gray-850), var(--gray-900));
		color: var(--gray-50);
		text-shadow: var(--lightest-text-shadow);
		scroll-snap-align: center;
		overflow: hidden;
		flex: 0 0 auto;
		&:not(:has(img)) {
			background-color: var(--middleground-color);
			background-image: linear-gradient(var(--middleground-color), var(--foreground-color));
			color: var(--high-contrast-color);
		}
	`;

	const Portal = styled.img`
		display: block;
		inline-size: 100%;
		object-fit: cover;
		object-position: top center;
		mask-image: linear-gradient(transparent, black 25%, transparent);
		mask-type: alpha;
		overflow: hidden;
	`;

	const Description = styled.p`
		position: absolute;
		z-index: calc(var(--z-absolute) + 1);
		bottom: 0;
		display: block;
		font-size: var(--large);
		font-style: italic;
		font-weight: var(--light-weight);
		line-height: var(--short-line);
		padding: var(--medium);
		padding-inline-end: var(--large);
		margin: 0;
	`;

	const Title = styled.span`
		display: block;
		font-style: normal;
		font-family: var(--display-family);
		font-size: var(--x-large);
		font-weight: var(--bold-weight);
		margin-block-end: var(--4x-small);
	`;

	const Link = styled.a`
		position: absolute;
		inset: 0;
		z-index: var(--z-absolute);
		display: flex;
		flex-flow: row nowrap;
		justify-content: end;
		align-items: start;
		font-size: var(--3x-large);
		line-height: 1;
		color: inherit;
		cursor: pointer;
		text-decoration: none;
		flex: 0 0 auto;
		padding: var(--medium);
		transition: opacity var(--fast-time) var(--ease-in);
		&:hover, &:focus {
			opacity: var(--highest-opacity);
		}
		&:active {
			opacity: var(--higher-opacity);
			transition-duration: 0ms;
		}
	`;

	return (
		<Grid id="projects">
			{projects.map(({ title, image, description, url }, index) => (
				<Project key={index}>
					{typeof image === "string" && (
						<Portal src={image} loading="lazy" alt="" />
					)}
					<Description>
						<Title>{title}</Title>
						{description}
					</Description>
					<Link href={url}>
						<i className="bi bi-box-arrow-up-right" aria-label="Learn More"></i>
					</Link>
				</Project>
			))}
		</Grid>
	);
}