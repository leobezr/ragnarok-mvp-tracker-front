import { RouteRecordRaw } from "vue-router";
import LoginPage from "@/views/anonymous/login/LoginRoot.vue";
import AdminDashboard from "@/views/auth/admins/dashboard/DashboardRoot.vue";
import MvpTracker from "@/views/auth/users/mvp-tracker/MvpTrackerRoot.vue";

const adminRoutes: RouteRecordRaw[] = [
  {
    path: "dashboard/",
    name: "Dashboard",
    component: AdminDashboard,
    meta: {
      routeRelative: "dashboard",
    },
  },
  {
    path: "tracker/",
    name: "MvpTracker",
    component: MvpTracker,
    meta: {
      routeRelative: "mvpTracker",
    },
  },
];

const userRoutes: RouteRecordRaw[] = [];

const anonymousRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "LoginPage" },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    redirect: { name: "LoginPage" },
  },
];

const authenticatedRoutes: RouteRecordRaw[] = [
  {
    path: "/app/",
    name: "Auth",
    redirect: { name: "Dashboard" },
    children: [...adminRoutes, ...userRoutes],
  },
];

export default [...authenticatedRoutes, ...anonymousRoutes];
