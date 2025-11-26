import { styled } from "@linaria/react";
import Profile from "../components/Profile";

export default function Home() {
	const Container = styled.article`
		display: block;
		padding-block: var(--margin-size);
		padding-inline-start: max(var(--safe-left), var(--margin-size));
		padding-inline-end: max(var(--safe-right), var(--margin-size));
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
		font-size: var(--2x-large);
		color: var(--high-contrast-color);
		margin-block: var(--large) var(--3x-small);
		transition: font-size var(--fast-time) var(--ease-out);
		@media (--phone) {
			font-size: var(--4x-large);
		}
		@media (--laptop) {
			font-size: var(--5x-large);
		}
		@media (--desktop) {
			font-size: var(--6x-large);
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
		margin-block: var(--large);
		transition: font-size var(--fastest-time) var(--ease-out);
		@media (--desktop) {
			font-size: var(--x-large);
		}
	`;

	return (
		<Container>
			<Wrapper>
				<Header>
					<Profile src="/profile.png" description="Myself, Jess!" />
					<Title>Hey, Jess Sandoval.</Title>
					<Subtitle>User-Interface Designer &amp; Developer.</Subtitle>
				</Header>
				<Summary>Hi there! My name is Jess. I'm a web developer that designs webpages in a fashionable and accessible package.</Summary>
			</Wrapper>
		</Container>
	);
}