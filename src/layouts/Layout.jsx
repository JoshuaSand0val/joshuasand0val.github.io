// Layout: Baseline layout for any page.

import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import WritersBlock from "../components/WritersBlock";

import "../styles/Layout.scss";

export default function Layout() {
	return (
		<div className="layout">
			<Header
				title={(
					<WritersBlock
						initial="Hey, Jes!"
						replace="Hey, Joshua Elijah Sandoval!"
						repeat={0}
					/>
				)}
				subtitle="Full-Stack Web Developer based in Utah."
				navigation={{
					Home: "/",
					About: "/about",
					Projects: "/projects",
					Github: "https://github.com/JoshuaSand0val/",
					Contact: "/contact"
				}}
			/>
			<main className="layout-main">
				<Outlet />
			</main>
		</div>
	);
}