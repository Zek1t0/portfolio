/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
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
