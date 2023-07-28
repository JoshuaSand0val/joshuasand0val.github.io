// App: Component containing the entire website.

import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout"
import Home from "./pages/Home";

import "./styles/App.scss";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	);
}