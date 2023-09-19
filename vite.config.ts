import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import{ FontaineTransform }from"fontaine";

export default defineConfig({
	plugins: [sveltekit(),  
		FontaineTransform.vite({ fallbacks:["Poppins","Montserrat"]})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
