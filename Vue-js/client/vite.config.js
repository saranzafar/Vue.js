import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Define backend URL based on environment
// const apiUrl = process.env.NODE_ENV === 'production'
//     ? 'https://vue-js-server-hazel.vercel.app'
//     : 'http://localhost:5000'; 

const apiUrl = 'https://vue-js-server-hazel.vercel.app';

export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            "/api": {
                target: apiUrl,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "")
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
});
