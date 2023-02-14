import {PathRouteProps} from "react-router/dist/lib/components";
import MainPage from "pages/MainPage/MainPage";
import About from "pages/About/About";

type Path = 'main' | 'about'

const routerPath:Record<Path, string> = {
    main: '/',
    about: '/about',
}

export const routerConfig:Record<Path, PathRouteProps> = {
    main: {
        path: routerPath.main,
        element: <MainPage/>
    },
    about:{
        path: routerPath.about,
        element: <About/>
    }
}