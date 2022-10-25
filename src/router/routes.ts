import { RouteRecordRaw } from "vue-router";
import LoginPage from "@/views/anonymous/login/LoginRoot.vue";
import AdminDashboard from "@/views/auth/admins/dashboard/DashboardRoot.vue";

const adminRoutes: RouteRecordRaw[] = [
  {
    path: "dashboard/",
    name: "Dashboard",
    component: AdminDashboard,
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
