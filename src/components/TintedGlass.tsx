import styles from "./TintedGlass.module.css";

/** Tinted Glass component props. */
type props = {
	/** Tinted Glass component contents. */
	children: React.ReactNode
};

/** Translucent colored container for components. */
export default function TintedGlass({ children }: props) {
	return (
		<div
			className={styles.container}>
			{children}
		</div>
	);
}