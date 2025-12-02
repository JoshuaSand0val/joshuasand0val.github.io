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
		background-image: linear-gradient(to bottom, transparent 50%, var(--middleground-color) 50%);
		background-size: 100% var(--3x-small);
		background-repeat: repeat-y;
		color: var(--high-contrast-color);
		@media (--light) {
			--background-color: var(--white);
			--middleground-color: var(--pink-50);
			--foreground-color: var(--pink-100);
			--high-contrast-color: var(--black);
			--medium-contrast-color: var(--gray-900);
			--low-contrast-color: var(--gray-800);
		}
		@media (--dark) {
			--background-color: var(--black);
			--middleground-color: var(--blue-900);
			--foreground-color: var(--blue-800);
			--high-contrast-color: var(--white);
			--medium-contrast-color: var(--gray-100);
			--low-contrast-color: var(--gray-200);
		}
		& > * {
			flex: 0 0 auto;
		}
	`;

	const Content = styled.main`
		display: block;
		flex: 1 0 auto;
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