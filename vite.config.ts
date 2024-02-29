import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "tailwindcss";

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),
  ],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "./app")}/`,
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
