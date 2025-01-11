import styles from "./Header.module.css";
import Link from "./Link";

/** The website main navigation header. */
export default function Header() {
	return (
		<header className={styles.container}>
			<div className={styles.wrapper}>
				<h4 className={styles.title}>
					<Link to="/" content="Hey, Jes!" />
				</h4>
				<nav className={styles.navigation}>
					<Link to="#projects" content="Projects" />
					<Link to="https://github.com/joshuasand0val" content="Github" />
					<Link to="https://linkedin.com/in/heyjes/" content="Linkedin" />
				</nav>
			</div>
		</header>
	);
}