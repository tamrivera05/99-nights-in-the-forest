// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import umami from "@yeskunall/astro-umami";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://99nightsintheforestfree.com",
  vite: {
    plugins: [tailwindcss()],
  },
  // robotsTxt must be the last item in the array
  integrations: [
    icon(),
    sitemap({
      changefreq: "daily",
      priority: 0.7,
    }),
    alpinejs(),
    umami({
      id:"78d86786-079b-49e7-bb2f-0007e2c5e12a",
      endpointUrl:"https://analytics.growagardenfree.com",
      hostUrl:"https://analytics.growagardenfree.com",
    }),
    robotsTxt(),
  ],
});
