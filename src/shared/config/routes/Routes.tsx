import { PathRouteProps } from 'react-router/dist/lib/components';
import { lazy } from 'react';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AboutPage = lazy(() => import('pages/About/About'));
const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));

type Path = 'main' | 'about' | 'notFound'

const routerPath: Record<Path, string> = {
  main: '/',
  about: '/about',
  notFound: '*',
};

const routerConfig: Record<Path, PathRouteProps> = {
  main: {
    path: routerPath.main,
    element: <MainPage />,
  },
  about: {
    path: routerPath.about,
    element: <AboutPage />,
  },
  notFound: {
    path: routerPath.notFound,
    element: <NotFoundPage />,
  },
};

export {
  routerConfig, Path,
};
