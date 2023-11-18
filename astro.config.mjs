import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    hybridOutput: true
  },
  site: "https://astro-frontend-masters.netlify.app",
  integrations: [react({
    include: ["**/react/*"]
  }), solid({
    include: ["**/solid/*"]
  })],
  adapter: netlify()
});