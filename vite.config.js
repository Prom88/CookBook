import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CookBook',
  plugins: [react()],
    build: {
      outDir: 'build', // имя общей выходной директории
    },
})
