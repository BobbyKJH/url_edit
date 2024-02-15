import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      /** path */
      { find: "@", replacement: "/src" },
      { find: "@type", replacement: "/src/type" },
      { find: "@page", replacement: "/src/page" },
      { find: "@style", replacement: "/src/style" },
      { find: "@libs", replacement: "/src/libs" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
})