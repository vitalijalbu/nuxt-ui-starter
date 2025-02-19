import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import { themeSettings } from './src/stores/theme'

export default defineConfig({
    build: {
        target: 'esnext'
    },
    plugins: [
        vue(),
        ui(themeSettings)
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@public': fileURLToPath(new URL('./public', import.meta.url)),
            '@layouts': fileURLToPath(
                new URL('./src/views/layouts', import.meta.url)
            ),
            '@pages': fileURLToPath(
                new URL('./src/views/pages', import.meta.url)
            ),
            '@base-components': fileURLToPath(
                new URL('./src/components/base', import.meta.url)
            ),
            '@slot-components': fileURLToPath(
                new URL('./src/components/slots', import.meta.url)
            )
        }
    }
})
