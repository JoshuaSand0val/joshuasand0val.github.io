import styles from "./MenuBar.module.css";
import TintedGlass from "./TintedGlass";

export default function MenuBar() {
	return (
		<header className={styles.container}>
			<TintedGlass>
				<nav className={styles.nav}>
					<a href="/" className={`${styles.link} ${styles.active}`}>
						<span className={styles.icon}>
							<i className="bi bi-house-door"></i>
						</span>
						<span className={styles.label}>Hey, Jess!</span>	
					</a>
					<a href="/about" className={styles.link}>
						<span className={styles.icon}>
							<i className="bi bi-book"></i>
						</span>
						<span className={styles.label}>About</span>
					</a>
					<a href="/software" className={styles.link}>
						<span className={styles.icon}>
							<i className="bi bi-code-slash"></i>
						</span>
						<span className={styles.label}>Code</span>	
					</a>
					<a href="/contact" className={styles.link}>
						<span className={styles.icon}>
							<i className="bi bi-person"></i>
						</span>
						<span className={styles.label}>Contact</span>
					</a>
				</nav>
			</TintedGlass>
		</header>
	);
}