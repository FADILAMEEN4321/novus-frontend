/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"novus-teal": '#149B9E',
				"novus-dark-green": '#044041',
				"novus-light-green": '#21B685',
				"novus-gray": '#605B6C',
			}
		},
	},
	plugins: [],
}
