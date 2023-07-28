// Header: Website global navigation and introductory header.

import NavList from "./NavList";

import "../styles/Header.scss";

export default function Header({ title, subtitle, navigation }) {
	return (
		<header className="Header">
			<div className="Header-wrapper">
				<NavList links={navigation} />
				<h2 className="Header-title">
					{title}
				</h2>
				<br />
				<h3 className="Header-subtitle">
					{subtitle}
				</h3>
			</div>
		</header>
	);
}