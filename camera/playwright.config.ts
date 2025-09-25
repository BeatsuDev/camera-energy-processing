import { defineConfig } from '@playwright/test'

export default defineConfig({
	webServer: {
		command: 'bun run dev',
		port: 3000,
		reuseExistingServer: true,
	},
	testDir: 'tests/e2e',
})


