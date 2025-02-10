/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: "./src/setupTest.ts",
    outputFile: "json",
    globals: true,
    coverage: {
      enabled: true,
      provider: 'v8',
      cleanOnRerun: true
    },
    css: true
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  }
})