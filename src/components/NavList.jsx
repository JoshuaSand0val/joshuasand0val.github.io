// Navigation List: A horizontally wrapping list of links.

import { NavLink } from "react-router-dom";

import "../styles/NavList.scss";

export default function NavList({ links }) {
	return (
		<nav className="NavList">
			{Object.keys(links).map(title => {
				return <NavLink to={links[title]} key={title}>{title}</NavLink>;
			})}
		</nav>
	);
}