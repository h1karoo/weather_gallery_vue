import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";
import Home from "../views/Weather.vue";
import Profile from "../views/Profile.vue";
import Gallery from "../views/Gallery.vue";
import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from 'vue';

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        beforeEnter: createAuthGuard(app)
      },
      {
        path: "/gallery",
        name: "gallery",
        component: Gallery
      }
    ],
    history: createWebHashHistory()
  })
}
