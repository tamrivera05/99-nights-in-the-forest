// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://timbuilding.com",
  vite: {
    plugins: [tailwindcss()],
  },
  // robotsTxt must be the last item in the array
  integrations: [icon(), sitemap(), alpinejs(), robotsTxt()],
});
