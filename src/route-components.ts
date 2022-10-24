import { RouteName } from 'routes/routes';
import { Home } from 'pages/home';
import { NotFound } from 'pages/not-found';
import { Login } from 'pages/login/login';

const routeConfig = [
  {
    name: RouteName.Home,
    component: Home,
  },
  {
    name: RouteName.Login,
    component: Login,
  },
  {
    name: RouteName.Signup,
    component: Login,
  },
  {
    name: RouteName.NotFound,
    component: NotFound,
  },
];

export { routeConfig };
