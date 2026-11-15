// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://robotickybattle.sk',
  integrations: [
    sitemap({
      // Verzie pravidiel na tlač sú noindex, do sitemapy nepatria.
      filter: (page) => !page.includes("/print/"),
    }),
  ],
  base: "/",
  i18n: {
    locales: ["sk", "en"],
    defaultLocale: "sk",
  },
});
