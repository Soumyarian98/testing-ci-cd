import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
	test: {
		exclude: ["node_modules/**"],
		environment: "happy-dom",
		setupFiles: path.resolve(__dirname, "./src/test/setup.ts"),
		coverage: {
			thresholds: {
				statements: 59.79,
				autoUpdate: true,
			},
			all: true,

			reporter: ["html-spa"],
			include: ["src/**/*"],
			exclude: [
				"test/**",
				"vite.d.ts",
				"**/*.d,ts",
				"**/coverage/**",
				"**/*.test.*/",
			],
		},
	},
});
