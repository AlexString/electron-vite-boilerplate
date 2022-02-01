import { build, defineConfig } from "vite";

export default defineConfig({
	base: process.env.IS_DEV !== 'true' ? './' : '/',
	build: {
		outDir: 'app/build',
	}
})