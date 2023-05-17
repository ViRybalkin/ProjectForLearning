import {PathRouteProps} from 'react-router/dist/lib/components';
import {lazy} from 'react';
import {RolesTypes} from "entities/User";

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AboutPage = lazy(() => import('pages/About/About'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const ArticlesPage = lazy(() => import('pages/ArticlesPage/ui/ArticlesPage/ArticlesPage'));
const ArticlesDetailsPage = lazy(() => import('pages/ArticlesDetailsPage/ui/ArticlesDetailsPage'));
const AdminPage = lazy(() => import('pages/AdminPage/ui/AdminPage/AdminPage'));
const ForbiddenPage = lazy(() => import('pages/ForbiddenPage/ui/ForbiddenPage/ForbiddenPage'));
const NotFoundPage = lazy(() => import('pages/NotFound/NotFound'));

export interface RouterProps extends PathRouteProps {
    isAuth?: boolean;
    roles?: Array<RolesTypes>;
}

export type Path =
    'main'
    | 'about'
    | 'profile'
    | 'articlesPage'
    | 'articlesDetailsPage'
    | 'adminPage'
    | 'forbiddenPage'
    | 'notFound'

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
    adminPage: {
        path: routerPath.adminPage,
        element: <AdminPage/>,
        isAuth: true,
        roles: ['ADMIN', 'MANAGER'],
    }, forbiddenPage: {
        path: routerPath.forbiddenPage,
        element: <ForbiddenPage/>,
        isAuth: true,
    },
    notFound: {
        path: routerPath.notFound,
        element: <NotFoundPage/>,
    },
};
