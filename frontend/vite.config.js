import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'


export default defineConfig({
    plugins: [react()],
    css: {
        // Directly define the PostCSS plugins to bypass any potential issues with
        // loading external configuration files inside the Docker container
        postcss: {
            plugins: [
                tailwindcss(),
                autoprefixer(),
            ],    
        },
    },
})
