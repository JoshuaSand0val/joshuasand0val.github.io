// Provides metadata for the page.

import { Helmet } from "react-helmet";

export default function Meta({ title, description }: { [key: string]: string }) {
	return (
		<Helmet>
			<title>{title} | Hey, Jes!</title> 
			<meta name="description" content={description} />
			{/*<!-- Open Graph: -->*/}
			<meta property="og:site_name" content="Hey, Jes!" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="/opengraph.png" />
			<meta property="og:url" content={window.location.href} />
		</Helmet>
	);
}