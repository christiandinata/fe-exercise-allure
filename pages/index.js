import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Dummy Web</title>
			</Head>
			<div className={styles.container}>
				<main className={styles.main}>
					<h1>Welcome to my website</h1>
				</main>
			</div>
		</>
	);
}
