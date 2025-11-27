import { styled } from "@linaria/react";

/** Global section containing copyright info. */
export default function Footer() {
	const Footer = styled.footer`
		display: block;
		inline-size: min(100%, var(--largest-container));
		font-size: var(--small);
		padding-block-start: var(--small);
		padding-block-end: max(var(--medium), var(--safe-bottom));
		padding-inline-start: max(var(--margin-size), var(--safe-left));
		padding-inline-end: max(var(--margin-size), var(--safe-right));
		margin-inline: auto;
		color: var(--low-contrast-color);
	`;

	const Copyright = styled.span`
		display: block;
		text-align: end;
	`;

	return (
		<Footer>
			<Copyright>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</Copyright>
		</Footer>
	);
}