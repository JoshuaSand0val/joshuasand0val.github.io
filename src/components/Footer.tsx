import styles from "./Footer.module.css";

/** The main website footer. */
export default function Footer() {
	return (
		<footer className={styles.container}>
			<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
		</footer>
	);
}