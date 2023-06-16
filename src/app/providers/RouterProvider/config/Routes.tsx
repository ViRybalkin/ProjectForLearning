import {PathRouteProps} from 'react-router/dist/lib/components';
import {lazy} from 'react';
import {RolesTypes} from "@/entities/User";
import {Path} from "@/shared/types";
import {generateRoute} from "@/shared/constants";

const MainPage = lazy(() => import('@/pages/MainPage/ui/MainPage/MainPage'));
const AboutPage = lazy(() => import('@/pages/About/About'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage/ui/ProfilePage/ProfilePage'));
const ArticlesPage = lazy(() => import('@/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage'));
const ArticlesDetailsPage = lazy(() => import('@/pages/ArticlesDetailsPage/ui/ArticlesDetailsPage'));
const AdminPage = lazy(() => import('@/pages/AdminPage/ui/AdminPage/AdminPage'));
const ForbiddenPage = lazy(() => import('@/pages/ForbiddenPage/ui/ForbiddenPage/ForbiddenPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/ui/NotFoundPage/NotFound'));

export interface RouterProps extends PathRouteProps {
    isAuth?: boolean;
    roles?: Array<RolesTypes>;
}

export const routerConfig: Record<Path, RouterProps> = {
    about: {
        element: <AboutPage/>,
        path: generateRoute.about(),
    },
    adminPage: {
        element: <AdminPage/>,
        isAuth: true,
        path: generateRoute.adminPage(),
        roles: ['ADMIN', 'MANAGER'],
    },
    articlesDetailsPage: {
        element: <ArticlesDetailsPage/>,
        isAuth: true,
        path: generateRoute.articlesDetailsPage(':id'),
    },
    articlesPage: {
        element: <ArticlesPage/>,
        isAuth: true,
        path: generateRoute.articlesPage(),
    },
    forbiddenPage: {
        element: <ForbiddenPage/>,
        isAuth: true,
        path: generateRoute.forbiddenPage(),
    },
    main: {
        element: <MainPage/>,
        path: generateRoute.main(),
    },
    notFound: {
        element: <NotFoundPage/>,
        path: generateRoute.notFound(),
    },
    profile: {
        element: <ProfilePage/>,
        isAuth: true,
        path: generateRoute.profile(':profileId'),
    },
};
