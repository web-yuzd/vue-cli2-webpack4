const Index = () => import('./views/index.vue');

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
];

export default routes;