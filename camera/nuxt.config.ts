import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@vueuse/nuxt"],
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	typescript: {
		strict: true,
	},
});
