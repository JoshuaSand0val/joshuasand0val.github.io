import { styled } from "@linaria/react";
import TintedGlass from "./TintedGlass";

export default function MenuBar() {
	const Container = styled.header`
		position: sticky;
		z-index: var(--z-sticky);
		bottom: 0;
		display: flex;
		flex-flow: row nowrap;
		justify-content: start;
		padding-inline: var(--margin-size);
		padding-block-start: var(--3x-small);
		padding-block-end: max(var(--small), var(--safe-bottom));
		scroll-snap-type: inline mandatory;
		overflow: auto;
	`;

	const Wrapper = styled.div`
		display: block;
		margin-inline: auto;
	`;

	const Nav = styled.nav`
		display: flex;
		flex-flow: row nowrap;
		justify-content: start;
		align-items: center;
		gap: var(--large);
		padding-inline: var(--large);
		padding-block: var(--x-small);
	`;

	const Link = styled.a`
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		gap: var(--x-small);
		font-weight: var(--normal-weight);
		line-height: var(--short-line);
		color: var(--low-contrast-color);
		text-decoration: none;
		scroll-snap-align: center;
		cursor: pointer;
		&:hover, &:focus {
			color: var(--high-contrast-color);
		}
	`;

	const Icon = styled.span`
		display: block;
		font-size: var(--large);
	`;

	const Label = styled.span`
		display: block;
		font-size: var(--small);
		white-space: nowrap;
	`;

	const Home = styled.span`
		font-size: var(--2x-large);
		font-family: var(--accent-family);
		line-height: var(--shortest-line);
	`;

	return (
		<Container>
			<Wrapper>
				<TintedGlass>
					<Nav>
						<Link href="/">
							<Label><Home>Hey, Jess!</Home></Label>	
						</Link>
						<Link href="#projects">
							<Icon><i className="bi bi-journal-code" /></Icon>
							<Label>Projects</Label>	
						</Link>
						<Link href="https://github.com/joshuasand0val">
							<Icon><i className="bi bi-github" /></Icon>
							<Label>Github</Label>
						</Link>
						<Link href="https://linkedin.com/in/heyjes/">
							<Icon><i className="bi bi-linkedin" /></Icon>
							<Label>LinkedIn</Label>
						</Link>
					</Nav>
				</TintedGlass>
			</Wrapper>
		</Container>
	);
}