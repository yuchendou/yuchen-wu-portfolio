import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this repo under /yuchen-wu-portfolio/
// https://vite.dev/config/
export default defineConfig({
  base: '/yuchen-wu-portfolio/',
  plugins: [react()],
})
