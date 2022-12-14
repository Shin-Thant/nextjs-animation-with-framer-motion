import Head from "next/head";
import { motion as m } from "framer-motion";

export default function contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
			</Head>

			<m.main
				initial={{ y: "100%" }}
				animate={{ y: 0 }}
				exit={{ opacity: 1 }}
				transition={{
					duration: 0.75,
					ease: "easeOut",
				}}
				className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-10 px-6"
			>
				<div className="my-40 p-1">
					<h1 className="text-4xl font-center lg:text-right lg:text-8xl">
						Let&apos;s talk
					</h1>
				</div>

				<div className="flex gap-8">
					<div className="lg:text-2xl text-base">
						<h4>Find me:</h4>
					</div>

					<div className="lg:text-2xl text-base underline">
						<ul className="flex gap-3">
							<li className="pb-2">Twitter</li>
							<li className="pb-2">Instagram</li>
							<li className="pb-2">LinkedIn</li>
							<li className="pb-2">Dribble</li>
						</ul>
					</div>
				</div>
			</m.main>
		</>
	);
}
