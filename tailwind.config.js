import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: [
			"./index.html",
			"./src/**/*.{js,ts,jsx,tsx}",
		],
		extract
	},
	theme: {
		screens,
		fontFamily: {
			"display": ["Satisfy", "cursive"],
			"body": ["Halant", "serif"],
			"accent": ["Montserrat", "sans-serif"]
		}
	},
	plugins: [
		fluid
	],
}