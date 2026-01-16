import { styled } from "@linaria/react";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";

export default function App() {
	const Container = styled.div`
		position: absolute;
		display: flex;
		flex-flow: column nowrap;
		justify-content: start;
		align-items: stretch;
		inline-size: 100%;
		min-block-size: 100%;
		font-family: var(--body-family);
		font-weight: var(--regular-weight);
		line-height: var(--normal-line);
		word-spacing: var(--normal-word);
		letter-spacing: var(--normal-letter);
		background-color: var(--background-color);
		background-image:
			linear-gradient(var(--background-color), var(--foreground-color)),
			url("./art.jpg");
		background-size: cover;
		background-blend-mode: overlay;
		color: var(--high-contrast-color);
		& > * {
			flex: 0 0 auto;
		}
	`;

	const Content = styled.main`
		display: block;
		flex: 1 0 auto;
		padding-block-start: var(--safe-top);
		order: -1;
	`;

	return (
		<Container>
			<MenuBar />
			<Content>
				<Home />
			</Content>
			<Footer />
		</Container>
	);
}