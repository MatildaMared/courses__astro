import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

export default defineConfig({
	output: "hybrid",
	experimental: {
		hybridOutput: true,
	},
	site: "https://astro-frontend-masters.netlify.app",
	integrations: [
		react({
			include: ["**/react/*"],
		}),
		solid({
			include: ["**/solid/*"],
		}),
	],
});
