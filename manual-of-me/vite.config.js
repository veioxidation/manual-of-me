import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/manual-of-me/', // Replace 'your-project' with your actual repo name
})
