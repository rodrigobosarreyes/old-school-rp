import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import sass from 'sass';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass
			}
		}
	}
});
