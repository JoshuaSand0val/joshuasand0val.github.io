// App: Component containing the entire website.

import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout"

import Home from "./pages/Home.mdx";
import About from "./pages/About.mdx";
import Projects from "./pages/Projects.mdx";
import Contact from "./pages/Contact.mdx";

import "./styles/App.scss";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}