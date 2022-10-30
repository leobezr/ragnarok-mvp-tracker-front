import { createWebHistory, createRouter, RouteLocationRaw } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const navigate = (route: RouteLocationRaw) => {
  try {
    router.push(route);
  } catch {
    return;
  }
};

export default router;
