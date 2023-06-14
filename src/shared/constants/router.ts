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

export const generateRoute = {
  main: () => routerPath.main,
  about: () => routerPath.about,
  profile: (id: string | undefined) => routerPath.profile + id,
  articlesPage: () => routerPath.articlesPage,
  articlesDetailsPage: (id: string | undefined) => routerPath.articlesDetailsPage + id,
  adminPage: () => routerPath.adminPage,
  forbiddenPage: () => routerPath.forbiddenPage,
  notFound: () => routerPath.notFound,
};
