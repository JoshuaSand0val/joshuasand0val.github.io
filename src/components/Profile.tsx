import { styled } from "@linaria/react";
import TintedGlass from "./TintedGlass";

/** Types for Profile component props. */
type props = {
	/** Profile image file path. */
	src: string,
	/** Profile image descriptive text. */
	description: string,
	/** Profile pronouns. */
	pronouns: string
};

/** Container for a "profile picture" image. */
export default function Profile({ src, description, pronouns }: props) {
	const Container = styled.div`
		position: relative;
		display: block;
		inline-size: min(40%, var(--medium-container));
		transform: rotate(-1deg);
		margin-inline-end: var(--margin-size);
		margin-block-end: max(var(--medium), var(--margin-size));
		float: left;
		transition: inline-size var(--fast-time) var(--ease-out);
		@media (--watch) {
			inline-size: 100%;
		}
	`;

	const Image = styled.img`
		display: block;
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
		object-position: top center;
	`;

	const Pronouns = styled.span`
		position: absolute;
		z-index: var(--z-absolute);
		inset: auto var(--x-small) var(--2x-small);
		display: block;
		font-size: var(--x-large);
		font-family: var(--accent-family);
		text-shadow: 0 0 1px var(--black), var(--light-text-shadow);
		color: var(--white);
	`;

	return (
		<Container>
			<TintedGlass>
				<Image src={src} alt={description} />
				<Pronouns>{pronouns}</Pronouns>
			</TintedGlass>
		</Container>
	);
}