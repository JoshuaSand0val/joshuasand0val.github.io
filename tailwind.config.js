import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			"2xs": "180px",
			"xs": "240px",
			"sm": "360px",
			"md": "480px",
			"lg": "768px",
			"xl": "1024px",
			"2xl": "1440px",
			"3xl": "1600px"
		},
		zIndex: {
			"underlay": "-1000",
			"overlay": "1000",
			"dropdown": "2000",
			"sticky": "3000",
			"fixed": "4000",
			"backdrop": "5000",
			"modal": "6000",
			"popup": "7000",
			"tooltip": "8000"
		},
		fontFamily: {
			"body": ["Montserrat", "sans-serif"],
			"display": ["Halant", "serif"],
			"brand": ["Satisfy", "cursive"]
		},
		fontSize: {
			// https://utopia.fyi/type/calculator?c=180,16,1.125,1600,20,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
			"xs": "clamp(0.7035rem, 0.8011rem + -0.0976cqi, 0.7901rem)",
			"sm": "clamp(0.8889rem, 0.8827rem + 0.055cqi, 0.9377rem)",
			"md": "clamp(1rem, 0.9683rem + 0.2817cqi, 1.25rem)",
			"lg": "clamp(1.125rem, 1.0564rem + 0.6099cqi, 1.6663rem)",
			"xl": "clamp(1.2656rem, 1.1445rem + 1.0766cqi, 2.2211rem)",
			"2xl": "clamp(1.4238rem, 1.229rem + 1.7317cqi, 2.9607rem)",
			"3xl": "clamp(1.6018rem, 1.3046rem + 2.6421cqi, 3.9467rem)",
			"4xl": "clamp(1.802rem, 1.3636rem + 3.8973cqi, 5.2609rem)"
		},
		spacing: {
			// https://utopia.fyi/space/calculator?c=180,16,1.125,1600,20,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-2xl&g=s,l,xl,12
			/* Base Values: */
			"3xs": "clamp(0.25rem, 0.2421rem + 0.0704cqi, 0.3125rem)",
			"2xs": "clamp(0.5rem, 0.4842rem + 0.1408cqi, 0.625rem)",
			"xs": "clamp(0.75rem, 0.7262rem + 0.2113cqi, 0.9375rem)",
			"sm": "clamp(1rem, 0.9683rem + 0.2817cqi, 1.25rem)",
			"md": "clamp(1.5rem, 1.4525rem + 0.4225cqi, 1.875rem)",
			"lg": "clamp(2rem, 1.9366rem + 0.5634cqi, 2.5rem)",
			"xl": "clamp(3rem, 2.9049rem + 0.8451cqi, 3.75rem)",
			"2xl": "clamp(4rem, 3.8732rem + 1.1268cqi, 5rem)",
			"3xl": "clamp(6rem, 5.8099rem + 1.6901cqi, 7.5rem)",
			/* One-Up Values: */
			"3xs-2xs": "clamp(0.25rem, 0.2025rem + 0.4225cqi, 0.625rem)",
			"2xs-xs": "clamp(0.5rem, 0.4445rem + 0.493cqi, 0.9375rem)",
			"xs-sm": "clamp(0.75rem, 0.6866rem + 0.5634cqi, 1.25rem)",
			"sm-md": "clamp(1rem, 0.8891rem + 0.9859cqi, 1.875rem)",
			"md-lg": "clamp(1.5rem, 1.3732rem + 1.1268cqi, 2.5rem)",
			"lg-xl": "clamp(2rem, 1.7782rem + 1.9718cqi, 3.75rem)",
			"xl-2xl": "clamp(3rem, 2.7465rem + 2.2535cqi, 5rem)",
			"2xl-3xl": "clamp(4rem, 3.5563rem + 3.9437cqi, 7.5rem)",
			/* Custom Values: */
			"body": "clamp(1rem, 0.493rem + 4.507cqi, 5rem)",
			/* Safe Areas: */
			"safe-top": "env(safe-area-inset-top)",
			"safe-right": "env(safe-area-inset-right)",
			"safe-bottom": "env(safe-area-inset-bottom)",
			"safe-left": "env(safe-area-inset-left)"
		},
		extend: {
			colors: {
				brand: {
					DEFAULT: defaultTheme.colors.rose,
					dark: defaultTheme.colors.slate
				},
				primary: defaultTheme.colors.blue,
				secondary: defaultTheme.colors.gray,
				success: defaultTheme.colors.green,
				danger: defaultTheme.colors.red,
				warning: defaultTheme.colors.yellow,
				info: defaultTheme.colors.cyan
			},
			lineHeight: {
				"body": "1.6",
				"display": "1.2"
			}
		},
	},
	plugins: []
}