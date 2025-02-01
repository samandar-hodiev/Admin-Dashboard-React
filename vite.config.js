/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
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
      "@form":path.resolve(__dirname, "./src/components/form")
    }
  }
})
