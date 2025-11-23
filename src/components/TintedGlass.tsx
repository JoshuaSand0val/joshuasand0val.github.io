import { useMemo } from "react";
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
export default function TintedGlass({ className = "", children, hue }: props) {
	/** Degrees value of (randomly) selected Tinted Glass hue. */
	const hueValue: number = useMemo(() => hue ?? Math.floor(Math.random() * 360), []);

	return (
		<article
			className={`${styles.container} ${className}`}
			style={{ "--tinted-glass-hue": hueValue } as React.CSSProperties}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		</article>
	);
}