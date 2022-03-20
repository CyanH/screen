import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

const routes = [{
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index"), //入口
  },
  {
    path: "/mars3d",
    name: "mars3d",
    component: () => import("@/views/mars3d"), //遥感图
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;