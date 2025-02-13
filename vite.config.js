/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "./src"),
      "@images":path.resolve(__dirname, "./src/assets/images"),
      "@icons":path.resolve(__dirname, "./src/assets/icons"),
      "@layouts":path.resolve(__dirname, "./src/components/layouts"),
      "@ui":path.resolve(__dirname, "./src/components/ui"),
      "@sections":path.resolve(__dirname, "./src/components/layouts/sections"),
      "@form":path.resolve(__dirname, "./src/components/form"),
      "@mainLayout":path.resolve(__dirname, "./src/main-lyouts"),
      "@components":path.resolve(__dirname, "./src/components"),
      "@mocks":path.resolve(__dirname, "./src/mocks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router":path.resolve(__dirname, "./src/router"),
    }
  }
})

