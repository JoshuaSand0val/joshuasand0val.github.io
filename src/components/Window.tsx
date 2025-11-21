import { useMemo } from "react";
import styles from "./Window.module.css";

type props = {
	children: React.ReactNode
};

/** Translucent, bordered container for content. */
export default function Window({ children }: props) {
	/** Degrees value of randomly selected window hue. */
	const windowHue: number = useMemo(() => Math.floor(Math.random() * 360), []);

	return (
		<div className={styles.container} style={{"--hue": windowHue} as React.CSSProperties}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		</div>
	);
}