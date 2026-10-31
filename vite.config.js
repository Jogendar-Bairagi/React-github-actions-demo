import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  globals: true,         // Makes test, expect, etc. global (no need to import them!)
    environment: 'jsdom'
})
