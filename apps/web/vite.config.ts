import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  return {
    plugins: [react()],
    base: "./",
  }
});
