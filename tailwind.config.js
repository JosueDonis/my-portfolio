
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
				poppins: ['Poppins',],
				montserrat: ['Montserrat', 'Arial']
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
};
