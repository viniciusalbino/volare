import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Output directory
    outDir: '_site',
    
    // Assets directory
    assetsDir: 'assets',
    
    // Minify CSS and JS
    minify: true,
    
    // Source maps for development
    sourcemap: process.env.NODE_ENV === 'development',
    
    // Rollup options
    rollupOptions: {
      input: {
        main: 'src/assets/js/main.js',
      },
      output: {
        // Ensure CSS is extracted to a separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'assets/css/[name][extname]';
          return 'assets/[name][extname]';
        },
        // Ensure JS is properly chunked
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  
  server: {
    // Enable HMR
    hmr: true,
    
    // Open browser on start
    open: true,
    
    // Port - use a different port than Eleventy
    port: 5173,
    
    // Proxy requests to Eleventy
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
}); 