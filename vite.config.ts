import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': '/src/ui',
      '@components': '/src/components',
      '@client': '/src/client',
      '@graphql': '/src/graphql',
      '@utils': '/src/utils',
      '@hoc': '/src/hoc',
    },
  },
})
