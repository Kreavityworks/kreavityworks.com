import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', // Sangat krusial agar file JS/CSS terpanggil benar di GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})