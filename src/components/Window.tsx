import { useMemo } from "react";
import styles from "./Window.module.css";

type props = {
	className?: string,
	children: React.ReactNode,
	dark?: boolean,
	hue?: number
};

/** Translucent, bordered container for content. */
export default function Window({ className = "", children, dark = false, hue }: props) {
	/** Dark-theme CSS class name. */
	const darkClass: string = dark ? styles.dark : "";

	/** Degrees value of randomly selected window hue. */
	const windowHue: number = useMemo(() => hue ?? Math.floor(Math.random() * 360), []);

	return (
		<article
			className={`${styles.container} ${darkClass} ${className}`}
			style={{ "--hue": windowHue } as React.CSSProperties}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		</article>
	);
}