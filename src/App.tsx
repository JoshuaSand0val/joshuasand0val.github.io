import styles from "./App.module.css";
import TintedGlass from "./components/TintedGlass";

export default function App() {
	return (
		<div className={styles.container}>
			<TintedGlass className={styles.content} hue={10}>
				...
			</TintedGlass>
		</div>
	);
}