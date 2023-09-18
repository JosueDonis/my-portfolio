
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#606DCE'
				}
			},
			fontFamily: {
				// inter: ['Inter Variable'],
				montserrat: ['Montserrat']
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
};
