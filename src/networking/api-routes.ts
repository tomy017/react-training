/*
  Add all API paths used on the app here so that
  they are centrally documented.
*/
import { constants } from 'config/constants';

const port = constants.apiPort;

const API_ROUTES = {
  USERS: 'https://dummyapi.io/data/v1/user',
  SIGNUP: `http://localhost:${port}/signup`,
  LOGIN: `http://localhost:${port}/login`,
};

export { API_ROUTES };
