import vue from '@vitejs/plugin-vue'
const { defineConfig } = require('vite')
const { resolve } = require('path')

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        crud: resolve(__dirname, 'crud/index.html')
      }
    }
  }
});