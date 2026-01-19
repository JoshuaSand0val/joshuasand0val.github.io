import { styled } from "@linaria/react";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
	const Container = styled.article`
		display: block;
		padding-inline-start: max(var(--safe-left), var(--margin-size));
		padding-inline-end: max(var(--safe-right), var(--margin-size));
		margin-block: min(var(--margin-size), var(--8x-large));
	`;

	const Wrapper = styled.div`
		display: block;
		inline-size: min(100%, var(--largest-container));
		margin-inline: auto;
	`;

	const Header = styled.header`
		display: block;
		font-family: var(--display-family);
		font-weight: var(--heavy-weight);
		line-height: var(--short-line);
	`;

	const Title = styled.h1`
		font-size: var(--3x-large);
		color: var(--high-contrast-color);
		margin-block: var(--3x-large) var(--3x-small);
		transition: font-size var(--fast-time) var(--ease-out);
		@media (--phone) {
			font-size: var(--4x-large);
		}
		@media (--tablet) {
			font-size: var(--5x-large);
		}
		@media (--laptop) {
			font-size: var(--6x-large);
		}
		@media (--desktop) {
			font-size: var(--7x-large);
		}
	`;

	const Subtitle = styled.h2`
		font-size: var(--medium);
		color: var(--medium-contrast-color);
		margin-block: 0;
		transition: font-size var(--faster-time) var(--ease-out);
		@media (--phone) {
			font-size: var(--large);
		}
		@media (--tablet) {
			font-size: var(--x-large);
		}
		@media (--desktop) {
			font-size: var(--2x-large);
		}
	`;

	const Summary = styled.p`
		display: block;
		font-family: var(--body-family);
		font-size: var(--large);
		line-height: var(--normal-line);
		margin-block: var(--x-small) var(--x-large);
		transition: font-size var(--fastest-time) var(--ease-out);
		@media (--tablet) {
			font-size: var(--x-large);
		}
	`;

	return (
		<Container>
			<Wrapper>
				<Header>
					<Profile src="/profile.jpg" description="Myself, Jess!" pronouns="She/Her/They" />
					<Title>Hey, Jess!</Title>
					<Subtitle>User-Interface Designer &amp; Developer.</Subtitle>
				</Header>
				<Summary>
					Hi there! My name is Jess.
					I'm a web developer with a curious eye for detail.
					I design web technologies in a fashionable and accessible package.
				</Summary>
				<Projects />
			</Wrapper>
		</Container>
	);
}