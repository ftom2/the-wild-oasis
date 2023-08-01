import { createApp } from "vue"
import { VueQueryPlugin } from "@tanstack/vue-query"
import { OhVueIcon } from "oh-vue-icons"
import "./styles/index.css"
import App from "./App.vue"
import { router } from "./router"

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.component("Icon", OhVueIcon)
app.mount("#app")
