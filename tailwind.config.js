import fluid, { extract } from "fluid-tailwind";

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
		screens: {
			"2xs": "11.25rem",
			"xs": "15rem",
			"sm": "22.5rem",
			"md": "30rem",
			"lg": "48rem",
			"xl": "64rem",
			"2xl": "90rem",
			"3xl": "100rem"
		},
		fontSize: {
			"5xl": "5.61rem",
			"4xl": "4.209rem",
			"3xl": "3.157rem",
			"2xl": "2.369rem",
			"xl": "1.777rem",
			"lg": "1.333rem",
			"md": "1rem",
			"sm": "0.75rem",
			"xs": "0.563rem"
		},
		fontFamily: {
			"display": ["Halant", "serif"],
			"body": ["Montserrat", "sans-serif"],
			"accent": ["Satisfy", "cursive"]
		}
	},
	plugins: [
		fluid
	],
}