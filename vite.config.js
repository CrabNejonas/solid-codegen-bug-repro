import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [solid()],
});
