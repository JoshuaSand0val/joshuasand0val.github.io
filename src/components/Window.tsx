import { useMemo } from "react";
import styles from "./Window.module.css";

type props = {
	children: React.ReactNode,
	dark?: boolean,
	hue?: number
};

/** Translucent, bordered container for content. */
export default function Window({ children, dark = false, hue }: props) {
	/** Dark-theme CSS class name. */
	const darkClass: string = dark ? styles.dark : "";

	/** Degrees value of randomly selected window hue. */
	const windowHue: number = useMemo(() => hue ?? Math.floor(Math.random() * 360), []);

	return (
		<div className={`${styles.container} ${darkClass}`} style={{"--hue": windowHue} as React.CSSProperties}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		</div>
	);
}