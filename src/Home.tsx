// The homepage for the website application.

import Page from "./components/Page.js";

export default function Home() {
	return (
		<Page title="Home" description="Jes is a full-stack web developer.">
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
		</Page>
	);
}