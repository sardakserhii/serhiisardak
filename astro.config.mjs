// astro.config.mjs
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel"; // если деплоишь на Vercel

// Если хочешь максимально совместимо с Node: используем assert для JSON.
const simpleIcons = (
  await import("@iconify-json/simple-icons/icons.json", {
    assert: { type: "json" },
  })
).default;
const lucide = (
  await import("@iconify-json/lucide/icons.json", { assert: { type: "json" } })
).default;

import yaml from '@rollup/plugin-yaml';

export default defineConfig({ // Line 19 in original
  output: "static", // or 'hybrid' 'server'
  // adapter: vercel(),
  site: "https://sardak.dev",
  integrations: [
    icon({
      collections: {
        "simple-icons": simpleIcons,
        lucide: lucide,
      },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss(), yaml()],
    resolve: {
      alias: {
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
  },
});
