import Link from "./Link";
import projects from "./Projects.json";
import styles from "./Projects.module.css";

interface projects {
	title: string,
	description: string
	url: string
	image: string | boolean
}

/** Listings of all my projects. */
// Project images must be of a viewport of 1200/800 CSS pixels.
export default function Projects() {
	return (
		<div className={styles.grid}>
			{projects.map(({ title, image, description, url }: projects) => (
				<div className={styles.item}>
					<article className={styles.project}>
						<header className={styles.header}>
							<h2 className={styles.title}>{title}</h2>
							<p className={styles.description}>{description}</p>
						</header>
						{typeof image === "string" && (
							<a className={styles.portal} href={url}>
								<img src={image} loading="lazy" alt="" />
							</a>
						)}
						<span className={styles.link}>
							<Link to={url} content="Learn More" />
						</span>
					</article>
				</div>
			))}
		</div>
	);
}