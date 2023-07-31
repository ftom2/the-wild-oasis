import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        exclude: ["oh-vue-icons/icons"]
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
            "@components": fileURLToPath(new URL("./src/components", import.meta.url))
        }
    }
})
