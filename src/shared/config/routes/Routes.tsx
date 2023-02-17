import { PathRouteProps } from 'react-router/dist/lib/components';
import { MainPage, About } from 'pages';

type Path = 'main' | 'about'

interface linkConfigType {
    path: string;
    name: string;
}

const routerPath:Record<Path, string> = {
  main: '/',
  about: '/about',
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
