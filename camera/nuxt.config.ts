import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
	css: ["~/assets/css/main.css"],
	typescript: {
		strict: true,
	},
});
