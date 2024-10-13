// Represents the content of a page.

import { ReactNode } from "react";

import Meta from "./Meta.js";

interface props {
	title: string,
	description: string,
	children: ReactNode
}

export default function Page({ title, description, children }: props) {
	return <>
		<Meta title={title} description={description} />
		{children}
	</>;
}