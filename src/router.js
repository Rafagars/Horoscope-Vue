import Vue from "vue";
import VueRouter from "vue-router"

import Signs from "./components/Signs.vue"
import Horoscope from "./components/Horoscope.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Signs",
        component: Signs,
    },
    {
        path: "/:sign/",
        name: "Horoscope",
        component: Horoscope
    },
    {
        path: "/:sign/:day",
        name: "Horoscope",
        component: Horoscope,
    }
]

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;