import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import EmployerJobList from "@/views/employer/jobs/EmployerJobList.vue";
import EmployerCreateJob from "@/views/employer/jobs/EmployerCreateJob.vue";
import EmployerCalendar from "@/views/employer/EmployerCalendar.vue";
import EmployerCreateJobDemo from "@/views/employer/jobs/EmployerCreateJobDemo.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    },
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
        path: "/employer/jobs",
        name: "EmployerJobList",
        component: EmployerJobList
    },
    {
        path: "/employer/jobs/create",
        name: "EmployerCreateJob",
        component: EmployerCreateJob
    },
    {
        path: "/employer/jobs/create-demo",
        name: "EmployerCreateJobDemo",
        component: EmployerCreateJobDemo
    },
    {
        path: "/employer/calendar",
        name: "EmployerCalendar",
        component: EmployerCalendar
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;