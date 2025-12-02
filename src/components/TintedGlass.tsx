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
		border-radius: var(--small-radius);
		box-shadow: var(--lightest-box-shadow);
		color: var(--high-contrast-color);
		overflow: hidden;
		&::before, &::after {
			content: "";
			position: absolute;
			z-index: var(--z-bottom);
			inset: 0;
		}
		&::before {
			background-color: var(--middleground-color);
			opacity: var(--higher-opacity);
		}
		&::after {
			background-image: linear-gradient(45deg,
				transparent,
				var(--foreground-color),
				transparent
			);
			mask:
				linear-gradient(#000 0 0) content-box,
				linear-gradient(#000 0 0) padding-box;
			mask-composite: exclude;
			padding: var(--4x-small);
		}
	`;

	return (
		<Container>{children}</Container>
	);
}