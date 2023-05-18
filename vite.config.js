import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@' : path.resolve(__dirname, './src'),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@schema": path.resolve(__dirname, "./src/schema/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
    },
  },
  optimizeDeps: {
    exclude: ["@babel/preset-env", "@babel/preset-react", "babel-jest"],
  },
  plugins: [react()],
  test: {
    environment: "happy-dom",
  },
});
