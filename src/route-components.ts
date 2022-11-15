import { RouteName } from 'routes/routes';
import { Login } from 'pages/login/login';
import { Home } from 'pages/home/index';
import { NotFound } from 'pages/not-found';
import { UserProfile } from 'pages/user-profile/index';

const routeConfig = [
  {
    name: RouteName.Home,
    component: Home,
  },
  {
    name: RouteName.UserProfile,
    component: UserProfile,
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
