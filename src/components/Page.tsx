// Represents the content of a page.

import { ReactElement } from "react";

import Meta from "./Meta.js";

interface props {
	title: string,
	description: string,
	children: ReactElement
}

export default function Page({ title, description, children }: props) {
	return <>
		<Meta title={title} description={description} />
		{children}
	</>;
}