// Layout for the website application.

import { ReactNode } from "react";

import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

interface props {
	children: ReactNode
}

export default function Layout({ children }: props) {
	return <>
		<article className="
				absolute inset-0
				flex flex-col
				bg-[length:100%_6px] dark:bg-cover
				bg-repeat dark:bg-no-repeat
				bg-gradient-to-b from-pink-100 from-50% to-red-100 to-50%
				dark:bg-gradient-to-bl dark:from-slate-900 dark:from-0% dark:to-zinc-950 dark:to-100%
				text-slate-800 dark:text-slate-300">
			<section className="
				mt-[env(safe-area-inset-top)]">
				<Navbar/>
			</section>
			<section className="
				block grow
				~px-6/24 ~py-6/12
				mr-[env(safe-area-inset-right)]
				ml-[env(safe-area-inset-left)]
				~text-base/2xl">
				{children}
			</section>
			<section className="
				mb-[env(safe-area-inset-bottom)]">
				<Footer/>
			</section>
		</article>
	</>;
}