import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('/1.ts')) {
            return 'chunk_1'
          }

          if (id.includes('/2.ts')) {
            return 'chunk_2'
          }


          return undefined
        }
      },
    },
    minify: false,
  },
});