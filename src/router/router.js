import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";

//Employers Jobs related
import EmployerProfile from "@/views/employer/EmployerProfile.vue";
import EmployerJobList from "@/views/employer/jobs/EmployerJobList.vue";
import EmployerCreateJob from "@/views/employer/jobs/EmployerCreateJob.vue";
import EmployerCalendar from "@/views/employer/jobfair/EmployerCalendar.vue";
import EmployerApplicantList from "@/views/employer/jobs/EmployerApplicantList.vue";
import EmployerApplicantDetails from "@/views/employer/jobs/EmployerApplicantDetails.vue";
import EmployerJobDetails from "@/views/employer/jobs/EmployerJobDetails.vue";
import EmployerPostJobToSchool from "@/views/employer/jobs/EmployerPostJobToSchool.vue";
import EmployerViewSchoolList from "@/views/employer/schoolfunctions/EmployerViewSchoolList.vue";
import EmployerEditJob from "@/views/employer/jobs/EmployerEditJob.vue";
//Applicant Dashboard
import EmployerApplicantDashboard from "@/views/employer/applicantfunctions/EmployerApplicantDashboard.vue";
//Employer Job fair related
import EmployerViewFairList from "@/views/employer/jobfair/EmployerViewFairList.vue";
import EmployerFairDetail from "@/views/employer/jobfair/EmployerFairDetail.vue";
import EmployerBooth from "@/views/employer/jobfair/EmployerBooth.vue";

import BlobTest from "@/views/BlobTest.vue";
import SchoolViewCompanyList from "@/views/school/companyfunctions/SchoolViewCompanyList.vue";
import SchoolViewCompanyDetail from "@/views/school/companyfunctions/SchoolViewCompanyDetail.vue";
import SchoolViewJobDetail from "@/views/school/companyfunctions/SchoolViewJobDetail.vue"

import { createRouter, createWebHistory } from "vue-router";

const EmployerRole = "Employer";
const EmployeeRole = "Employee";
const SchoolRole = "School";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            onlyGuest: true,
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: false,
          }
    },
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: false,
          }
    },
    {
      path: "/employer/profile",
      name: "EmployerProfile",
      component: EmployerProfile,
      meta: {
          requiresAuth: false,
        }
  },
    {
        path: "/employer/jobs",
        name: "EmployerJobList",
        component: EmployerJobList,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/jobs/create",
        name: "EmployerCreateJob",
        component: EmployerCreateJob,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/applicants",
        name: "EmployerApplicantDashboard",
        component: EmployerApplicantDashboard,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/calendar",
        name: "EmployerCalendar",
        component: EmployerCalendar,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/jobs/:jobId/applicants",
        name: "EmployerApplicantList",
        component: EmployerApplicantList,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/jobs/:jobId/applicants/:applicationId",
        name: "EmployerApplicantDetails",
        component: EmployerApplicantDetails,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/jobs/:jobId",
        name: "EmployerJobDetails",
        component: EmployerJobDetails,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
      path: "/employer/jobs/:jobId/edit",
      name: "EmployerEditJob",
      component: EmployerEditJob,
      meta: {
          requiresAuth: true,
          role: EmployerRole,
        }
  },
    {
        path: "/employer/jobs/:jobId/post-to-school",
        name: "EmployerPostJobToSchool",
        component: EmployerPostJobToSchool,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/schools",
        name: "EmployerViewSchoolList",
        component: EmployerViewSchoolList,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/jobfair",
        name: "EmployerViewFairList",
        component: EmployerViewFairList,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/jobfair/:jobFairId/",
        name: "EmployerFairDetail",
        component: EmployerFairDetail,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/employer/jobfair/:jobFairId/:boothId",
        name: "EmployerBooth",
        component: EmployerBooth,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/test",
        name: "BlobTest",
        component: BlobTest,
        meta: {
            requiresAuth: true,
            role: EmployerRole,
          }
    },
    {
        path: "/test",
        name: "BlobTest",
        component: BlobTest
    },
    
    
    {
        path: "/school/company-list",
        name: "SchoolViewCompanyList",
        component: SchoolViewCompanyList,
        meta: {
            requiresAuth: true,
            role: SchoolRole,
          }
    },
    {
        path: "/school/company-detail/:schoolId",
        name: "SchoolViewCompanyDetail",
        component: SchoolViewCompanyDetail,
        meta: {
            requiresAuth: true,
            role: SchoolRole,
          }
    },
    {
        path: "/school/job-detail/:postId",
        name: "SchoolViewJobDetail",
        component: SchoolViewJobDetail,
        meta: {
            requiresAuth: true,
            role: SchoolRole,
          }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }
  
  router.beforeEach((to, from, next) => {
    // console.log("requiresAuth: ", to.matched.some(record => record.meta.requiresAuth));
    // console.log("onlyGuest: ", to.matched.some(record => record.meta.onlyGuest));
    // console.log("role er: ", to.matched.some(record => record.meta.role === EmployerRole));
    // console.log("role ee: ", to.matched.some(record => record.meta.role === EmployeeRole));
    // console.log("token: ", sessionStorage.getItem("token"));
  
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (sessionStorage.getItem("token") === null) {
        next({ name: "Login", });
      } else {
        const parsedToken = parseJwt(sessionStorage.getItem("token"));
        if (parsedToken.role === "employer") {
          if (to.matched.some(record => record.meta.role === EmployerRole)) {
            next();
          } else {
            next({ name: "Dashboard" });
          }
        } else if (parsedToken.role === "employee") {
          if (to.matched.some(record => record.meta.role === EmployeeRole)) {
            next();
          } else {
            next({ name: "Dashboard" });
          }
        } else if (parsedToken.role === "school") {
          if (to.matched.some(record => record.meta.role === SchoolRole)) {
            next();
          } else {
            next({ name: "Dashboard" });
          }
        }
      }
    } else if (to.matched.some(record => record.meta.onlyGuest)){
      if (sessionStorage.getItem("token") === null) {
        next();
      } else {
        next({name: "Dashboard"})
      }
    } else {
      next();
    }
  });



export default router;