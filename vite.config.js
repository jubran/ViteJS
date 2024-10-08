import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import { resolve } from 'path'
// ----------------------------------------------------------------------

export default defineConfig( {
  plugins: [
    react(),
    checker( {
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
      },
      overlay: {
        initialIsOpen: false, // eslint show in server side true , not show false
        inheritAttrs: false
      },
    } ),
  ],

  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join( process.cwd(), 'node_modules/$1' ),
      },
      {
        find: /^src(.+)/,
        replacement: path.join( process.cwd(), 'src/$1' ),
      },
    ],
  },
  server: {
    port: 3030,
  },
  preview: {
    port: 3030,
  },
} );
