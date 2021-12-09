import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
const path = require('path')

const resolve = (dir: string): string => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    server: {
        port: 8060,
        open: true,
        https: false,
        proxy: {}
    },
    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),]
})
