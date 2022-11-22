import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// also don't forget to `npm i -D @types/node`, so __dirname won't complain
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/views": path.resolve(__dirname, "./src/views"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/common": path.resolve(__dirname, "./src/common"),
      "@/store": path.resolve(__dirname, "./src/store"),
    },
  },
});
