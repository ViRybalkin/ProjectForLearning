import './styles/index.scss'
import {classNames, UseTheme} from "app/helpers";
import {AppRouter, linkConfig} from "shared/config";
import {NavBar, SideBar} from "widget/ui";

export const App = () => {
    const {theme} = UseTheme();
        return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar links={linkConfig}/>
            <main className={classNames('mainWrapper')}>
                <SideBar/>
                <div className={classNames('contentWrapper')}>
                    <AppRouter/>
                </div>
            </main>
        </div>
    )
};