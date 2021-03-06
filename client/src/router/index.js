import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home.vue"
import Search from "../views/Search.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router
