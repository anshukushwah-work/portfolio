import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Honour PORT when something assigns one; plain `npm run dev` still uses 5173.
  server: { port: Number(process.env.PORT) || 5173 },
})
