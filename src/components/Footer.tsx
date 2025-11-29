import { styled } from "@linaria/react";

/** Global section containing copyright info. */
export default function Footer() {
	const Footer = styled.footer`
		display: block;
		font-size: var(--x-small);
		background-color: var(--middleground-color);
		border-block-start: 1px var(--border-style) var(--foreground-color);
		padding-inline-start: max(var(--margin-size), var(--safe-left));
		padding-inline-end: max(var(--margin-size), var(--safe-right));
		padding-block-start: var(--x-small);
		padding-block-end: max(var(--small), var(--safe-bottom));
		color: var(--low-contrast-color);
	`;

	const Wrapper = styled.div`
		display: block;
		inline-size: min(100%, var(--largest-container));
		margin-inline: auto;
	`;
	
	const Copyright = styled.span`
		display: block;
		text-align: end;
	`;

	return (
		<Footer>
			<Wrapper>
				<Copyright>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval. All rights reserved.</Copyright>
			</Wrapper>
		</Footer>
	);
}