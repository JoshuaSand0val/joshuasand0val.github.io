import { useMemo } from "react";
import styles from "./Window.module.css";
import { GlassCard } from "@developer-hub/liquid-glass";

type props = {
	children: React.ReactNode
};

/** Translucent, bordered container for content. */
export default function Window({ children }: props) {
	/** Degrees value of randomly selected window hue. */
	const windowHue: number = useMemo(() => Math.floor(Math.random() * 360), []);

	return (
		<div className={styles.container} style={{"--hue": windowHue} as React.CSSProperties}>
			<GlassCard
				displacementScale={50}
				blurAmount={0.1}
				className={styles.wrapper}
				shadowMode={false}>
				<div className={styles.content}>
					{children}
				</div>
			</GlassCard>
		</div>
	);
}