import config from './config';

const routes = {
  main: {
    dashboard: `${config.appUrl}`,
  },
  auth: {
    signIn: `${config.appUrl}/sign-in`,
    signUp: `${config.appUrl}/sign-up`,
  },
};

export default routes;
