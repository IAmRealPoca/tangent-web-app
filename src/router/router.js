import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";

//Employers Jobs related
import EmployerJobList from "@/views/employer/jobs/EmployerJobList.vue";
import EmployerCreateJob from "@/views/employer/jobs/EmployerCreateJob.vue";
import EmployerCalendar from "@/views/employer/jobfair/EmployerCalendar.vue";
import EmployerApplicantList from "@/views/employer/jobs/EmployerApplicantList.vue";
import EmployerApplicantDetails from "@/views/employer/jobs/EmployerApplicantDetails.vue";
import EmployerJobDetails from "@/views/employer/jobs/EmployerJobDetails.vue";
import EmployerPostJobToSchool from "@/views/employer/jobs/EmployerPostJobToSchool.vue";
import EmployerViewSchoolList from "@/views/employer/schoolfunctions/EmployerViewSchoolList.vue";
//Applicant Dashboard
import EmployerApplicantDashboard from "@/views/employer/applicantfunctions/EmployerApplicantDashboard.vue";
//Employer Job fair related
import EmployerViewFairList from "@/views/employer/jobfair/EmployerViewFairList.vue";
import EmployerFairDetail from "@/views/employer/jobfair/EmployerFairDetail.vue";
import EmployerBooth from "@/views/employer/jobfair/EmployerBooth.vue";

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
        path: "/employer/applicants",
        name: "EmployerApplicantDashboard",
        component: EmployerApplicantDashboard
    },
    {
        path: "/employer/calendar",
        name: "EmployerCalendar",
        component: EmployerCalendar
    },
    {
        path: "/employer/jobs/:jobId/applicants",
        name: "EmployerApplicantList",
        component: EmployerApplicantList
    },
    {
        path: "/employer/jobs/:jobId/applicants/:applicationId",
        name: "EmployerApplicantDetails",
        component: EmployerApplicantDetails
    },
    {
        path: "/employer/jobs/:jobId",
        name: "EmployerJobDetails",
        component: EmployerJobDetails
    },
    {
        path: "/employer/jobs/:jobId/post-to-school",
        name: "EmployerPostJobToSchool",
        component: EmployerPostJobToSchool
    },
    {
        path: "/employer/schools",
        name: "EmployerViewSchoolList",
        component: EmployerViewSchoolList
    },
    {
        path: "/employer/jobfair",
        name: "EmployerViewFairList",
        component: EmployerViewFairList
    },
    {
        path: "/employer/jobfair/someId/",
        name: "EmployerFairDetail",
        component: EmployerFairDetail
    },
    {
        path: "/employer/jobfair/someId/booth",
        name: "EmployerBooth",
        component: EmployerBooth
    },
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;