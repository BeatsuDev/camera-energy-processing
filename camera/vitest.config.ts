import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['tests/unit/**/*.test.{ts,tsx,js,jsx}'],
		exclude: ['tests/e2e/**', 'node_modules/**'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
		},
	},
})


