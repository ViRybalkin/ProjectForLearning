import { PathRouteProps } from 'react-router/dist/lib/components';
import { MainPage, About, NotFound } from 'pages';

type Path = 'main' | 'about' | 'notFound'

interface linkConfigType {
    path: string;
    name: string;
}

const routerPath:Record<Path, string> = {
  main: '/',
  about: '/about',
  notFound: '*',
};

const routerConfig:Record<Path, PathRouteProps> = {
  main: {
    path: routerPath.main,
    element: <MainPage />,
  },
  about: {
    path: routerPath.about,
    element: <About />,
  },
  notFound: {
    path: routerPath.notFound,
    element: <NotFound />,
  },
};

const linkConfig: Array<linkConfigType> = [
  {
    path: routerPath.main,
    name: 'MainPage',
  },
  {
    path: routerPath.about,
    name: 'About',
  },
];

export {
  routerConfig, linkConfig, Path, linkConfigType,
};
