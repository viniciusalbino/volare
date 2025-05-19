import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name;
          if (info) {
            if (info.endsWith('.woff2') || info.endsWith('.otf')) {
              return 'assets/fonts/[name][extname]';
            }
            if (info.endsWith('.svg') || info.endsWith('.png') || info.endsWith('.jpg')) {
              return 'assets/images/[name][extname]';
            }
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  css: {
    devSourcemap: true,
  },
}));
