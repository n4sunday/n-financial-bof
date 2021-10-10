import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'modules', replacement: path.resolve(__dirname, 'src/modules') },
      { find: 'interfaces', replacement: path.resolve(__dirname, 'src/interfaces') },
      { find: 'stores', replacement: path.resolve(__dirname, 'src/stores') },
      { find: 'styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: 'actions', replacement: path.resolve(__dirname, 'src/actions') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
    ],
  },
})
