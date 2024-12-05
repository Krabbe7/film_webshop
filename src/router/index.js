import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import NotFound from "@/views/NotFound.vue"
import minkurv from "@/components/minkurv.vue"
import BetalingsSide from "@/components/betalingsSide.vue"
import Orderbekræftigelse from "@/components/orderbekræftigelse.vue"
import FilmOversigtView from "@/views/filmOversigtView.vue"
import FilmSideView from "@/views/filmSideView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },

  {
    path: "/film",
    name: "film",
    component: FilmOversigtView,
  },
  {
    path: "/film/:slug",
    name: "filmDetaljer",
    component: FilmSideView,
  },
  {
    path: "/minkurv",
    name: "minkurv",
    component: minkurv,
  },
  {
    path: "/minkurv/betaling",
    name: "betaling",
    component: BetalingsSide,
  },
  {
    path: "/orderbekræftigelse",
    name: "orderbekræftigelse",
    component: Orderbekræftigelse,
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
