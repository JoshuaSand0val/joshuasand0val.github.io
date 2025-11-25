import styles from "./App.module.css";
import MenuBar from "./components/MenuBar";

export default function App() {
	return (
		<div className={styles.container}>
			<MenuBar />
			<main className={styles.content}>
			</main>
		</div>
	);
}