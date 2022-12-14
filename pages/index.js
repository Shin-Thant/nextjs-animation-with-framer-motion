import Head from "next/head";
import { motion as m } from "framer-motion";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
			</Head>

			<m.div
				initial={{ y: "100%" }}
				animate={{ y: 0 }}
				exit={{ opacity: 1 }}
				transition={{
					duration: 0.75,
					ease: "easeOut",
				}}
				className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-10 px-6"
			>
				<main>
					<div className="my-36 p-1">
						<h1 className="text-4xl font-center lg:text-right lg:text-8xl">
							Happy Pickle
						</h1>
					</div>

					<div className="flex justify-between">
						<div>
							<h2>Design</h2>
							<h2>Company</h2>
							<h2>2022</h2>
						</div>

						<div>
							<h3>This pickle gonna make you smile.</h3>
							<h3>Scottish designs to make you happy.</h3>
							<h3>Click contact for cool transition.</h3>
						</div>
					</div>
				</main>
			</m.div>
		</>
	);
}
