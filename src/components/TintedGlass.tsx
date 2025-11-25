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
			style={{ "--tinted-glass-hue": hue } as React.CSSProperties}
			className={styles.container}>
			{children}
		</div>
	);
}