import { styled } from "@linaria/react";

/** Tinted Glass component props. */
type props = {
	/** Tinted Glass contents. */
	children: React.ReactNode
};

/** Translucent colored container for components. */
export default function TintedGlass({ children }: props) {
	const Container = styled.div`
		position: relative;
		z-index: 0;
		display: block;
		backdrop-filter: var(--lighter-blur);
		border-radius: var(--medium-radius);
		box-shadow: var(--lightest-box-shadow);
		color: var(--high-contrast-color);
		padding: var(--4x-small);
		overflow: hidden;
		&::before, &::after {
			content: "";
			position: absolute;
			inset: 0;
			border-radius: inherit;
			pointer-events: none;
		}
		&::before {
			z-index: var(--z-bottom);
			background-color: var(--background-color);
			opacity: var(--higher-opacity);
		}
		&::after {
			z-index: var(--z-top);
			mask:
				linear-gradient(#000 0 0) content-box,
				linear-gradient(#000 0 0) padding-box;
			mask-composite: exclude;
			padding: inherit;
			background-image: linear-gradient(45deg,
				var(--blue-300),
				var(--pink-300),
				var(--gray-150),
				var(--pink-300),
				var(--blue-300)
			);
			@media (--dark) {
				background-image: linear-gradient(45deg,
					var(--blue-500),
					var(--pink-500),
					var(--gray-250),
					var(--pink-500),
					var(--blue-500)
				);
			}
		}
	`;

	return (
		<Container>{children}</Container>
	);
}