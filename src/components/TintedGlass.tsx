import styles from "./TintedGlass.module.css";

/** Tinted Glass component props. */
type props = {
	/** Tinted Glass component contents. */
	children: React.ReactNode,
	/** Tinted Glass component color hue. */
	hue?: number
};

/** Translucent colored container for components. */
export default function TintedGlass({ children, hue = 200 }: props) {
	return (
		<div
			className={styles.container}
			style={{ "--tinted-glass-hue": hue } as React.CSSProperties}>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
}