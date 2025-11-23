import styles from "./TintedGlass.module.css";

/** Tinted Glass component props. */
type props = {
	/** CSS class name to append to Tinted Glass component. */
	className?: string,
	/** Tinted Glass component contents. */
	children: React.ReactNode,
	/** Tinted Glass component color hue. */
	hue?: number
};

/** Translucent colored container for components. */
export default function TintedGlass({ className = "", children, hue = 200 }: props) {
	return (
		<article
			className={`${styles.container} ${className}`}
			style={{ "--tinted-glass-hue": hue } as React.CSSProperties}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		</article>
	);
}