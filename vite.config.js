import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function portfolioAssetResolver() {
  return {
    name: "portfolio-asset-resolver",
    resolveId(id) {
      if (id.startsWith("portfolio:asset/")) {
        const filename = id.replace("portfolio:asset/", "");
        return path.resolve(__dirname, "src/assets", filename);
      }
    },
  };
}

export default defineConfig({
  base: "/AppPorftolio/",
  plugins: [
    portfolioAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
