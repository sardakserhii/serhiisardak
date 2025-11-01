// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
  },
});
