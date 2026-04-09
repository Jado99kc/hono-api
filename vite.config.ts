import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV ?? "development",
    ),
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "node20",
    ssr: true,
    outDir: "dist",
    rollupOptions: {
      input: "./src/index.ts",
    },
  },
});
