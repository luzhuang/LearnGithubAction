import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    minify: false,
    lib: {
      entry: "./index.tsx",
      /**
       * The name of the exposed global variable. Required when the `formats` option includes
       * `umd` or `iife`
       */
      name: "OasisLib",
      formats: ["es", "umd"],
    },
  },
});
