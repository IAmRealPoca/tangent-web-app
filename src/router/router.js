import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import EmployerJobList from "@/views/employer/jobs/EmployerJobList.vue";
import EmployerCreateJob from "@/views/employer/jobs/EmployerCreateJob.vue";
import EmployerCalendar from "@/views/employer/jobfair/EmployerCalendar.vue";
import EmployerCreateJobDemo from "@/views/employer/jobs/EmployerCreateJobDemo.vue";
import EmployerApplicantList from "@/views/employer/jobs/EmployerApplicantList.vue";
import EmployerJobDetails from "@/views/employer/jobs/EmployerJobDetails.vue";
import EmployerViewSchoolList from "@/views/employer/schoolfunctions/EmployerViewSchoolList.vue";

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
    {
        path: "/employer/applicants",
        name: "EmployerApplicantList",
        component: EmployerApplicantList
    },
    {
        path: "/employer/jobs/:jobId",
        name: "EmployerJobDetails",
        component: EmployerJobDetails
    },
    {
        path: "/employer/schools",
        name: "EmployerViewSchoolList",
        component: EmployerViewSchoolList
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;