/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter'],
				poppins: ['Poppins', 'Arial'],
				montserrat: ['Montserrat']
			}
		},
	},
	plugins: [ require('tailwindcss-animated')]
};
