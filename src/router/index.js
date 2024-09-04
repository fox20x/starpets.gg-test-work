import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Главная",
    component: Home,
  },
  {
    path: "/convert",
    name: "Конвертация",
    component: () => import("../views/Convert.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
