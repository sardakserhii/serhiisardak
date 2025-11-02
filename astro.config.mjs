import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// Подтягиваем JSON-коллекции (top-level await ок)
const simpleIcons = (await import("@iconify-json/simple-icons/icons.json")).default;
const lucide      = (await import("@iconify-json/lucide/icons.json")).default;

export default defineConfig({
  integrations: [
    icon({
      collections: {
        "simple-icons": simpleIcons,
        "lucide": lucide,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
  },
});