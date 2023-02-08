/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [...configDefaults.exclude, 'packages/template/*'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['vitest-localstorage-mock'],
  },
})
