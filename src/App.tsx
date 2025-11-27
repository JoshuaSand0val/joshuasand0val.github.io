import styles from "./App.module.css";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";

export default function App() {
	return (
		<div className={styles.container}>
			<MenuBar />
			<main className={styles.content}>
				<Home />
			</main>
			<Footer />
		</div>
	);
}