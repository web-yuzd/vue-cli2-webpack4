const Index = () => import('./views/index.vue');
import Layout from './views/layout/Layout';

const routes = [{
  path: '/',
  name: 'dashboard',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    component: () => import('./views/dashboard')
  }]
}];

export default routes;
