import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
	return (
		<div className="py-10 px-12">
			<Navbar />

			<AnimatePresence initial={false}>
				<Component key={router.pathname} {...pageProps} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
