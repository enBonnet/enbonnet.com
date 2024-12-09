import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				teal: '#2a7f7f',
				orange: '#f47c20',
				'dark-red': '#7c3626',
				'off-white': '#f8f4f9',
				blackish: '#051014'
			}
		}
	},
	plugins: [forms]
} satisfies Config;
