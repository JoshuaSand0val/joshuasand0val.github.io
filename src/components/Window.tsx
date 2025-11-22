import { useMemo } from "react";
import styles from "./Window.module.css";

type props = {
	className?: string,
	children: React.ReactNode,
	hue?: number
};

/** Translucent, bordered container for content. */
export default function Window({ className = "", children, hue }: props) {
	/** Degrees value of randomly selected window hue. */
	const windowHue: number = useMemo(() => hue ?? Math.floor(Math.random() * 360), []);

	return (
		<article
			className={`${styles.container} ${className}`}
			style={{ "--hue": windowHue } as React.CSSProperties}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		</article>
	);
}