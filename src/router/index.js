import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Classify from '../views/Classify.vue';
import Serve from '../views/Serve.vue';
import Home from '../views/Home.vue';
import Document from '../views/Document.vue';
import SourceCode from '../views/SourceCode.vue';
import Optimize from '../views/Optimize.vue';
import Community from '../views/Community.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'classify',
        component: Classify,
      },
      {
        path: 'serve',
        component: Serve,
        redirect: 'serve/document',
        children: [
          { path: 'document', component: Document },
          { path: 'sourcecode', component: SourceCode },
          { path: 'optimize', component: Optimize },
          { path: 'community', component: Community },
        ],
      },
      {
        path: 'login',
        component: Login,
      },
      {
        path:'register',
        component:Register
      }
    ],
  },
  {
    path: '*',
    redirect: '/home',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
