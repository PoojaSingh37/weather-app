import Dashboard from '@Views/Dashboard';
import { IRoute } from './types';
import Weather from '@Views/Weather';

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Weather ',
    component: Weather,
  
  },
  {
    path: '/',
    name: 'Dashboard ',
    component: Dashboard,
    authenticated: false,
  },
];

export default appRoutes;
