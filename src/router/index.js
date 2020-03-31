import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页"
    },
    // alias: "/home",
    component: Home
  },
  {
    path: "/",
    meta: {
      title: "首页"
    },
    redirect: "home"
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/intro",
    name: "intro",
    meta: {
      title: "企业介绍"
    },
    component: () => import("../views/Intro.vue")
  },
  {
    path: "/product",
    name: "product",
    meta: {
      title: "产品服务"
    },
    component: () => import("../views/Product.vue")
  },
  {
    path: "/ecology",
    name: "ecology",
    meta: {
      title: "生态基地"
    },
    component: () => import("../views/Ecology.vue")
  },
  {
    path: "/media",
    name: "media",
    meta: {
      title: "新闻媒体"
    },
    component: () => import("../views/Media.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, position) {
    if (position) {
      return position;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const ot = to.meta.title;

  document.title = ot ? `${ot}-百瑞众康` : "百瑞众康";
  next();
});

export default router;
