import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9090
  },
  build: {
    rollupOptions: {
      output: {
        // 配置手动拆分代码块
        manualChunks: {
          // 将Vue相关依赖拆分为一个chunk
          'vue-vendor': ['vue', 'vue-router'],
          // 将Element Plus拆分为一个chunk
          'element-plus': ['element-plus']
        }
      }
    }
  }
})
