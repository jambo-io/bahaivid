import {
  Home,
  Teste,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'home',
      name: 'Home',
      component: Home,
      isIndex: true,
    },
    { path: '/teste', name: 'Teste', component: Teste },
  ],
};
