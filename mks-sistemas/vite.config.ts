import { defineConfig } from 'vite'
import Router from 'vite-plugin-router'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

import path from 'path';

const SETUP_TESTS_DIR = path.resolve(
  __dirname,
  './src/setupTests.ts'
);


export default defineConfig(() => {
  return {
    server:{
      port: 3000,
      cors:true
    },
    
    plugins: [react(),Router(),tsconfigPaths()],
    test: {
      setupFiles: [SETUP_TESTS_DIR],
      environment: 'jsdom',
      globals: true,
      cache: false,
    },
  };
})
