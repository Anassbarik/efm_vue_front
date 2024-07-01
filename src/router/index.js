import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios';

let user = null
let status = null 
          

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',

      component: () => import('../views/TestView.vue')
    },
    {
      path: '/medecins',
      name: 'medecins',

      component: () => import('../views/MedecinView.vue')
    },
    {
      path: '/rendezvous',
      name: 'rendezvous',

      component: () => import('../views/RendezVousView.vue')
    },
    {
      path: "/appointments",
      name: "appointments",

      component: () => import('../views/dashboards/AppsView.vue')
    },
    {
      path: '/dashboards/infermiere',
      name: 'infermiere',

      component: () => import('../views/dashboards/InfermiereView.vue'),
     
      beforeEnter: (to , from , next) => {
        console.log(from.path);
        console.log(to.path);
        axios.get('http://localhost:8000/api/user')
        .then(res =>  {
          user = res.data
          if (user && user.role === "infermiere") {
            next();
          } else{
            next('/login');
          }
        })
        .catch(err => {
          status = err.response.status;
          next('/login');
      });
      
      }
         
    },
    {
      path: '/dashboards/rh',
      name: 'rh',

      component: () => import('../views/dashboards/rh/RhView.vue'),
      beforeEnter: (to , from , next) => {
        console.log(from.path);
        console.log(to.path);
        axios.get('http://localhost:8000/api/user')
        .then(res =>  {
          user = res.data
          if (user && user.role === "rh") {
            next();
          } else{
            next('/login');
          }
        })
        .catch(err => {
          status = err.response.status;
          next('/login');
      });
        // if (status != 401) {
        //   if (user && user.role === "rh") {
        //     next();
        //   } else{
        //     next('/login');
        //   }
        // } else {
        //   console.log('unauthenticated');
        //   next('/login');
        // }
        
    
      }
    },
    {
      path: "/dashboards/medecin",
      name: "medecinDashboard",

      component: () => import('../views/dashboards/medecin/homeView.vue'),
      beforeEnter: (to , from , next) => {
        console.log(from.path);
        console.log(to.path);
        axios.get('http://localhost:8000/api/user')
          .then(res =>  {
            user = res.data
            if (user && user.role === "medecin") {
              next();
            } else{
              next('/login');
            }
          })
          .catch(err => {
            status = err.response.status;
            next('/login');
        });
        // if (status != 401) {
        //   if (user && user.role === "medecin") {
        //     next();
        //   } else{
        //     next('/login');
        //   }
        // } else {
        //   console.log('unauthenticated');
        //   next('/login');
        // }
        
          
      }
    },
    {
      path: "/dashboards/medecin/:id",
      name: "showMedecin",

      component: () => import('../views/dashboards/medecin/ShowMedView.vue'),
    },
    {
      path: "/dashboards/calendar",
      name: "calendar.vue",

      component: () => import('../views/dashboards/medecin/calendar.vue'),
    },
    {
      path: '/dashboards/infermiere/rendezvous',
      name: 'appointments',

      component: () => import('../views/dashboards/AppointmentsView.vue')
    },
    {
      path: '/dashboards/infermiere/rendezvous/:id',
      name: 'showApp',

      component: () => import('../views/dashboards/ShowAppView.vue')
    },
    {
      path: '/patients',
      name: 'patients',

      component: () => import('../views/PatientsView.vue')
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/dashboards/rh/create',
      name: 'create',

      component: () => import('../views/auth/CreateView.vue')
    },
    {
      path: '/dashboards/rh/medecin/:id',
      name: 'rhMedecin',

      component: () => import('../views/dashboards/rh/ShowMedecinView.vue')
    },
    {
      path: '/dashboards/rh/infermier/:id',
      name: 'rhInfermmier',

      component: () => import('../views/dashboards/rh/ShowInfermierVue.vue')
    },
    {
      path: '/dashboards/rh/create',
      name: 'create',

      component: () => import('../views/auth/CreateView.vue')
    },
  ]
})


export default router
