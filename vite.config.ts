import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 포트 번호를 3000으로 설정
    open: true,  // 개발 서버 시작 시 자동으로 브라우저 창을 엽니다
  },
})
