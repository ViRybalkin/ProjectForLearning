import { Path } from '../types/Router.types';

export const routerPath: Record<Path, string> = {
  about: '/about',
  adminPage: '/admin',
  articlesDetailsPage: '/articles/',
  articlesPage: '/articles',
  forbiddenPage: '/forbidden',
  main: '/',
  notFound: '*',
  profile: '/profile/',
};

export const generateRoute = {
  about: () => routerPath.about,
  adminPage: () => routerPath.adminPage,
  articlesDetailsPage: (id: string | undefined) => routerPath.articlesDetailsPage + id,
  articlesPage: () => routerPath.articlesPage,
  forbiddenPage: () => routerPath.forbiddenPage,
  main: () => routerPath.main,
  notFound: () => routerPath.notFound,
  profile: (id: string | undefined) => routerPath.profile + id,
};
