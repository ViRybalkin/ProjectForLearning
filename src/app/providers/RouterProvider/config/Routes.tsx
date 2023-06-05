import {PathRouteProps} from 'react-router/dist/lib/components';
import {lazy} from 'react';
import {RolesTypes} from "@/entities/User";
import {Path} from "@/shared/types";
import {routerPath} from "@/shared/constants";

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
