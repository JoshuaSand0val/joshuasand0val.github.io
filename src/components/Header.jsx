// Header: Website global navigation and introductory header.

import NavList from "./NavList";

import "../styles/Header.scss";

export default function Header({ title, subtitle, navigation }) {
	return (
		<header className="header">
			<img className="header-image" src="/images/hero/banner.jpg" alt="banner image" loading="lazy" />
			<div className="header-wrapper">
				<NavList links={navigation} />
				<h2 className="header-title">
					{title}
				</h2>
				<br />
				<h3 className="header-subtitle">
					{subtitle}
				</h3>
			</div>
		</header>
	);
}