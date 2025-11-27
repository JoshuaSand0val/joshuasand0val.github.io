import { styled } from "@linaria/react";
import TintedGlass from "./TintedGlass";

/** Types for Profile component props. */
type props = {
	/** Profile image file path. */
	src: string,
	/** Profile image descriptive text. */
	description: string
};

/** Container for a "profile picture" image. */
export default function Profile({ src, description }: props) {
	const Container = styled.div`
		display: block;
		inline-size: min(40%, var(--medium-container));
		transform: rotate(-1deg);
		margin-inline-start: var(--margin-size);
		margin-block-end: max(var(--medium), var(--margin-size));
		float: right;
		transition: inline-size var(--fast-time) var(--ease-out);
		@media (--watch) {
			inline-size: 100%;
		}
	`;

	const Image = styled.img`
		display: block;
		inline-size: 100%;
		block-size: 100%;
		background-image: url("/art.jpg");
		background-size: cover;
		background-position: center;
		object-fit: cover;
		object-position: top center;
		@media (--dark) {
			filter: var(--lower-brightness);
		}
	`;

	return (
		<Container>
			<TintedGlass>
				<Image src={src} alt={description} />
			</TintedGlass>
		</Container>
	);
}