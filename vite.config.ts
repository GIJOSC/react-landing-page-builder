import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/react-landing-page-builder/",

  nitro: true,

  // importante para GitHub Pages
  build: {
    outDir: "dist",
  },
});
