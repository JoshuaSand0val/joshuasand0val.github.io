// Component representing the entire application.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home.tsx";
import Layout from "./components/Layout.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
				</Routes>
			</BrowserRouter>
		</Layout>
	</StrictMode>
);