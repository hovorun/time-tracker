import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const AppLayout = () =>
  import(/* webpackChunkName: "AppLayout" */ "@/layout/AppLayout.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/employee",
    name: "AppLayout",
    component: AppLayout,
    props: (route) => ({ name: route.query.name }),
  },
  {
    path: "/",
    redirect: () => ({ path: "/employee", query: { name: "Volodymyr" } }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
