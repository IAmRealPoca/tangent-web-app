import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

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
import SchoolViewJobDetail from "@/views/school/companyfunctions/SchoolViewJobDetail.vue";

import SchoolViewStudents from "@/views/school/studentmanagement/SchoolViewStudents.vue";
import SchoolViewMajorList from "@/views/school/studentmanagement/major/SchoolViewMajorList.vue";
import SchoolViewMajorDetail from "@/views/school/studentmanagement/major/SchoolViewMajorDetail.vue";
import SchoolCreateMajor from "@/views/school/studentmanagement/major/SchoolCreateMajor.vue";
import SchoolAddStudentToMajor from "@/views/school/studentmanagement/major/SchoolAddStudentToMajor.vue";
import SchoolFairManagement from "@/views/school/jobfair/SchoolFairManagement.vue";
import SchoolFairDetail from "@/views/school/jobfair/SchoolFairDetail.vue";
import SchoolEditMajor from "@/views/school/studentmanagement/major/SchoolEditMajor.vue";

import StudentViewCoverLetterList from '@/views/student/coverletter/StudentViewCoverLetterList.vue';
import StudentViewCVList from '@/views/student/cv/StudentViewCVList.vue';
import StudentViewCVDetail from "@/views/student/cv/StudentViewCVDetail.vue";
import StudentCreateCV from "@/views/student/cv/StudentCreateCV.vue";
import StudentFairDetail from "@/views/student/jobfair/StudentFairDetail.vue";
import StudentBooth from "@/views/student/jobfair/StudentBooth.vue";
import StudentViewFairList from "@/views/student/jobfair/StudentViewFairList.vue";

import LandingPage from "@/views/LandingPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const EmployerRole = "Employer";
const EmployeeRole = "Employee";
const SchoolRole = "School";
const Admin = "Admin";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      onlyGuest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      onlyGuest: true,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
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
    },
  },
  {
    path: "/employer/jobs",
    name: "EmployerJobList",
    component: EmployerJobList,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobs/create",
    name: "EmployerCreateJob",
    component: EmployerCreateJob,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/applicants",
    name: "EmployerApplicantDashboard",
    component: EmployerApplicantDashboard,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/calendar",
    name: "EmployerCalendar",
    component: EmployerCalendar,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobs/:jobId/applicants",
    name: "EmployerApplicantList",
    component: EmployerApplicantList,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobs/:jobId/applicants/:applicationId",
    name: "EmployerApplicantDetails",
    component: EmployerApplicantDetails,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobs/:jobId",
    name: "EmployerJobDetails",
    component: EmployerJobDetails,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobs/:jobId/edit",
    name: "EmployerEditJob",
    component: EmployerEditJob,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobs/:jobId/post-to-school",
    name: "EmployerPostJobToSchool",
    component: EmployerPostJobToSchool,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/schools",
    name: "EmployerViewSchoolList",
    component: EmployerViewSchoolList,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobfair",
    name: "EmployerViewFairList",
    component: EmployerViewFairList,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobfair/:jobFairId/",
    name: "EmployerFairDetail",
    component: EmployerFairDetail,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/employer/jobfair/:jobFairId/:boothId",
    name: "EmployerBooth",
    component: EmployerBooth,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/test",
    name: "BlobTest",
    component: BlobTest,
    meta: {
      requiresAuth: true,
      role: EmployerRole,
    },
  },
  {
    path: "/test",
    name: "BlobTest",
    component: BlobTest,
  },

  {
    path: "/school/company",
    name: "SchoolViewCompanyList",
    component: SchoolViewCompanyList,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/company/:companyId",
    name: "SchoolViewCompanyDetail",
    component: SchoolViewCompanyDetail,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/job-detail/:postId",
    name: "SchoolViewJobDetail",
    component: SchoolViewJobDetail,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/majors",
    name: "SchoolViewMajorList",
    component: SchoolViewMajorList,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/majors/create",
    name: "SchoolCreateMajor",
    component: SchoolCreateMajor,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/majors/:majorId",
    name: "SchoolViewMajorDetail",
    component: SchoolViewMajorDetail,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/majors/:majorId/edit",
    name: "SchoolEditMajor",
    component: SchoolEditMajor,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/majors/:majorId/add-student",
    name: "SchoolAddStudentToMajor",
    component: SchoolAddStudentToMajor,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/student",
    name: "SchoolViewStudents",
    component: SchoolViewStudents,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/jobfair",
    name: "SchoolFairManagement",
    component: SchoolFairManagement,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/school/jobfair/:jobFairId",
    name: "SchoolFairDetail",
    component: SchoolFairDetail,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/student/cv",
    name: "StudentViewCVList",
    component: StudentViewCVList,
    meta: {
      requiresAuth: true,
      role: EmployeeRole,
    },
  },
  {
    path: "/student/cv/:cvId",
    name: "StudentViewCVDetail",
    component: StudentViewCVDetail,
    meta: {
      requiresAuth: true,
      role: EmployeeRole,
    },
  },
  {
    path: "/student/cv/create",
    name: "StudentCreateCV",
    component: StudentCreateCV,
    meta: {
      requiresAuth: true,
      role: SchoolRole,
    },
  },
  {
    path: "/student/coverletter",
    name: "StudentViewCoverLetterList",
    component: StudentViewCoverLetterList,
    meta: {
      requiresAuth: true,
      role: EmployeeRole,
    },
  },
  {
    path: "/student/jobfair",
    name: "StudentViewFairList",
    component: StudentViewFairList,
    meta: {
      requiresAuth: true,
      role: EmployeeRole,
    },
  },
  {
    path: "/student/jobfair/:jobFairId",
    name: "StudentFairDetail",
    component: StudentFairDetail,
    meta: {
      requiresAuth: true,
      role: EmployeeRole,
    },
  },
  {
    path: "/student/jobfair/:jobFairId/:boothId",
    name: "StudentBooth",
    component: StudentBooth,
    meta: {
      requiresAuth: true,
      role: EmployeeRole,
    },
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
};

// router.beforeEach((to, from, next) => {
//   // console.log("requiresAuth: ", to.matched.some(record => record.meta.requiresAuth));
//   // console.log("onlyGuest: ", to.matched.some(record => record.meta.onlyGuest));
//   // console.log("role er: ", to.matched.some(record => record.meta.role === EmployerRole));
//   // console.log("role ee: ", to.matched.some(record => record.meta.role === EmployeeRole));
//   // console.log("token: ", sessionStorage.getItem("token"));

//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (sessionStorage.getItem("token") === null) {
//       next({ name: "Login", });
//     } else {
//       const parsedToken = parseJwt(sessionStorage.getItem("token"));
//       if (parsedToken.role === "employer") {
//         if (to.matched.some(record => record.meta.role === EmployerRole)) {
//           next();
//         } else {
//           next({ name: "Dashboard" });
//         }
//       } else if (parsedToken.role === "employee") {
//         if (to.matched.some(record => record.meta.role === EmployeeRole)) {
//           next();
//         } else {
//           next({ name: "Dashboard" });
//         }
//       } else if (parsedToken.role === "school") {
//         if (to.matched.some(record => record.meta.role === SchoolRole)) {
//           next();
//         } else {
//           next({ name: "Dashboard" });
//         }
//       }
//     }
//   } else if (to.matched.some(record => record.meta.onlyGuest)){
//     if (sessionStorage.getItem("token") === null) {
//       next();
//     } else {
//       next({name: "Dashboard"})
//     }
//   } else {
//     next();
//   }
// });

export default router;
