// The homepage for the website application.

import Meta from "./components/Meta.js";

export default function Home() {
	return (
		<>
			<Meta title="Home" description="Jes is a full-stack web developer." />
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
		</>
	);
}