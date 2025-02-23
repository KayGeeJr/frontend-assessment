import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import PatternPage from "@/pages/PatternPage.vue";

const routes = [
  { path: "/", component: LoginPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/pattern", component: PatternPage}, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
