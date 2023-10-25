// Layout: Baseline layout for any page.

import { Outlet } from "react-router-dom";

import Header from "../components/Header";

import "../styles/Layout.scss";

export default function Layout() {
	return (
		<div className="layout">
			<Header
				title="Hey! I'm Joshua Elijah Sandoval."
				subtitle="Full-Stack Web Developer based in Utah."
				navigation={{
					Home: "/",
					About: "/about/",
					Projects: "/projects/",
					Github: "https://github.com/JoshuaSand0val/",
					Contact: "/contact/"
				}}
			/>
			<main className="layout-main">
				<Outlet />
			</main>
		</div>
	);
}