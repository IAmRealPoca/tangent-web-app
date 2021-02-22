import Dashboard from "@/views/Dashboard.vue";
import EmployerJobList from "@/views/employer/jobs/EmployerJobList.vue";
import Login from "@/views/Login.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/employer/job-list",
        name: "EmployerJobList",
        component: EmployerJobList
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;