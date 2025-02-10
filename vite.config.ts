import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build : {
    outDir : "./__output"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@page": path.resolve(__dirname, "src/pages"),
    },
  },
});
