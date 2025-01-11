import styles from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

/** The website application component. */
export default function App() {
	return (
		<article className={styles.container}>
			<Header />
			<main className={styles.content}>
				<Homepage />
			</main>
			<Footer />
		</article>
	);
}