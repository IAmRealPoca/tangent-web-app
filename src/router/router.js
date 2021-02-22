import Dashboard from "@/views/Dashboard.vue";
import EmployerJobList from "@/views/employer/jobs/EmployerJobList.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;