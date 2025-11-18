import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'
import path from "path"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

=======
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
>>>>>>> a9455d908da187ba3b4c88641f0ff42deb8456c2
  },
})
