/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
		  fontFamily: {
			'bangers': ['Bangers', 'cursive'],
			'comic': ['"Comic Neue"', 'cursive'],
			'roboto-mono': ['"Roboto Mono"', 'monospace'],
			'roboto': ['Roboto', 'sans-serif'],
			'rubik': ['Rubik', 'sans-serif'],
		  },
			colors: {
				emerald: {
					600: '#059669',
				},
				cerise: {
					100: '#fbefea',
					500: '#d6525f',
					600: '#be3843',
				},
			},
		},
	},
	plugins: [],
}
