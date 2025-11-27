import styles from "./MenuBar.module.css";
import TintedGlass from "./TintedGlass";

export default function MenuBar() {
	return (
		<header className={styles.container}>
			<div className={styles.wrapper}>
				<TintedGlass>
					<nav className={styles.nav}>
						<a href="/" className={styles.link}>
							<span className={styles.label}>Hey, Jess!</span>	
						</a>
						<a href="#projects" className={styles.link}>
							<span className={styles.icon}>
								<i className="bi bi-journal-code"></i>
							</span>
							<span className={styles.label}>Projects</span>	
						</a>
						<a href="https://github.com/joshuasand0val" className={styles.link}>
							<span className={styles.icon}>
								<i className="bi bi-github"></i>
							</span>
							<span className={styles.label}>Github</span>
						</a>
						<a href="https://linkedin.com/in/heyjes/" className={styles.link}>
							<span className={styles.icon}>
								<i className="bi bi-linkedin"></i>
							</span>
							<span className={styles.label}>LinkedIn</span>
						</a>
					</nav>
				</TintedGlass>
			</div>
		</header>
	);
}