import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 4200,
  },
  preview: {
    port: 8000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
