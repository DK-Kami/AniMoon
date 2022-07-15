import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@cmp': '/components',
      "@kj-elements": '/src/components/KJElements',
    }
  },
  server: {
    port: 5000,
  },
  plugins: [react()]
})
