import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // TODO: 根据后端的地址进行配置
        target: 'http://localhost:9527',
        changeOrigin: true,
        // /api/test -> /test
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [vue()]
})
