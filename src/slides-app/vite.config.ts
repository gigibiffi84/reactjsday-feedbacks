import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/postcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-react-compiler',
            {
              compilationMode: 'annotation', // or 'annotation', 'syntax', 'all'
              logger: {
                logEvent(filename: never, event: { kind: never }) {
                  console.log(`[Compiler] ${event.kind}: ${filename}`)
                },
              },
              panicThreshold: 'critical_errors', //none Skip components with errors instead of failing the build
            },
          ],
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
