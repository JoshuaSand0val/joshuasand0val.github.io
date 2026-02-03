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
		background-color: var(--background-color);
		border-radius: var(--large-radius);
		box-shadow:
			0 0 0 1px var(--background-color),
			var(--lightest-box-shadow);
		color: var(--high-contrast-color);
		padding: var(--3x-small);
		overflow: hidden;
		&::before {
			content: "";
			position: absolute;
			inset: 0;
			border-radius: inherit;
			pointer-events: none;
			z-index: var(--z-top);
			mask:
				linear-gradient(#000 0 0) content-box,
				linear-gradient(#000 0 0) padding-box;
			mask-composite: exclude;
			padding: inherit;
			background-image: linear-gradient(45deg,
				var(--blue-300),
				var(--pink-300),
				var(--gray-100),
				var(--pink-300),
				var(--blue-300)
			);
			@media (--dark) {
				background-image: linear-gradient(45deg,
					var(--blue-500),
					var(--pink-500),
					var(--gray-300),
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