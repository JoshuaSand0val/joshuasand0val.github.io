import { useState } from "react";
import styles from "./Header.module.css";
import Link from "./Link";

/** The website main navigation header. */
export default function Header() {
	const [navOpen, setNavOpen]: [boolean, Function] = useState(false);

	return (
		<header className={styles.container}>
			<h4 className={styles.title}>
				<Link to="/" content="Hey, Jes!" />
			</h4>
			<button className={styles.navigationButton} onClick={() => setNavOpen(!navOpen)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
				</svg>
			</button>
			<nav className={styles.navigation} data-open={navOpen}>
				<a className={styles.optionLink} href="#projects">Projects</a>
				<a className={styles.optionLink} href="https://github.com/joshuasand0val">Github</a>
				<a className={styles.optionLink} href="https://linkedin.com/in/heyjes/">Linkedin</a>
			</nav>
		</header>
	);
}