import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    // alias: "/home",
    component: Home
  },
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/intro",
    name: "intro",
    component: () => import("../views/Intro.vue")
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/Product.vue")
  },
  {
    path: "/ecology",
    name: "ecology",
    component: () => import("../views/Ecology.vue")
  },
  {
    path: "/media",
    name: "media",
    component: () => import("../views/Media.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
