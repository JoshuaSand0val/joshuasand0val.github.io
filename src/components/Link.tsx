import styles from "./Link.module.css";

interface Link {
	to: string,
	content: string
}

/**
 * A link to another webpage.
 * @param props.to Destination of the link.
 * @param props.content Description of the link.
 */
export default function Link({ to, content }: Link) {
	return (
		<a href={to} className={styles.container}>{content}</a>
	);
}