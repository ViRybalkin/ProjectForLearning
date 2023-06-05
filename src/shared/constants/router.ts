import { Path } from '../types/Router.types';

export const routerPath: Record<Path, string> = {
  main: '/',
  about: '/about',
  profile: '/profile/',
  articlesPage: '/articles',
  articlesDetailsPage: '/articles/',
  adminPage: '/admin',
  forbiddenPage: '/forbidden',
  notFound: '*',
};
