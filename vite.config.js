import { defineConfig } from 'vite';

export default defineConfig({
	base: 'room-builder',
	build: {
		outDir: '../dist',
	},
	server: {
		open: true,
	},
});
