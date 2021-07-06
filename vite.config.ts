import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// 找不到名称 "process"。是否需要为节点安装类型定义? 请尝试使用 `npm i --save-dev @types/node`。
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@/': `${process.cwd()}/src/`,
    },
  },
  plugins: [reactRefresh()]
})
