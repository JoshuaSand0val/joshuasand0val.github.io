import styles from "./Window.module.css";

type props = {
	children: React.ReactNode
};

/** Translucent, bordered container for content. */
export default function Window({ children }: props) {
	/** Randomly selected window hue. */
	const windowHue: number = Math.floor(Math.random() * 360);

	return (
		<div className={styles.container} style={{"--hue": windowHue} as React.CSSProperties}>
			<div className={styles.wrapper}>
				{children}
			</div>
		</div>
	);
}