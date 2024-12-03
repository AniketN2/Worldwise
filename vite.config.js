import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: process.env.PORT || 5173, // Use Render's PORT environment variable or default to 5173
    host: true, // Listen on all network interfaces (0.0.0.0)
  }
});
