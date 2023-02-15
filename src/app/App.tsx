import './styles/index.scss'
import {classNames, UseTheme} from "app/helpers";
import {AppRouter, linkConfig} from "shared/config";
import {NavBar, SideBar} from "widget/ui";
import { Suspense } from 'react';

export const App = () => {
    const {theme} = UseTheme();
        return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <NavBar links={linkConfig}/>
                <main className={classNames('mainWrapper')}>
                    <SideBar/>
                    <div className={classNames('contentWrapper')}>
                        <AppRouter/>
                    </div>
                </main>
            </Suspense>
        </div>
    )
};