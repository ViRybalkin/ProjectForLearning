import {PathRouteProps} from 'react-router/dist/lib/components';
import {lazy} from 'react';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AboutPage = lazy(() => import('pages/About/About'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const ArticlesPage = lazy(() => import('pages/ArticlesPage/ArticlesPage'));
const ArticlesDetailsPage = lazy(() => import('pages/ArticlesDetailsPage/ArticlesDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));

export interface RouterProps extends PathRouteProps {
    isAuth?: boolean
}

export type Path = 'main' | 'about' | 'profile' | 'articlesPage' | 'articlesDetailsPage' | 'notFound'

export const routerPath: Record<Path, string> = {
    main: '/',
    about: '/about',
    profile: '/profile/',
    articlesPage: '/articles',
    articlesDetailsPage: '/articles/',
    notFound: '*',
};

export const routerConfig: Record<Path, RouterProps> = {
    main: {
        path: routerPath.main,
        element: <MainPage/>,
    },
    about: {
        path: routerPath.about,
        element: <AboutPage/>,
    },
    profile: {
        path: `${routerPath.profile}:profileId`,
        element: <ProfilePage/>,
        isAuth: true,
    },
    articlesPage: {
        path: routerPath.articlesPage,
        element: <ArticlesPage/>,
        isAuth: true,
    },
    articlesDetailsPage: {
        path: `${routerPath.articlesDetailsPage}:id`,
        element: <ArticlesDetailsPage/>,
        isAuth: true,
    },
    notFound: {
        path: routerPath.notFound,
        element: <NotFoundPage/>,
    },
};
