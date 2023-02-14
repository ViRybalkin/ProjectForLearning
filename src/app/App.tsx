import './styles/index.scss'
import {classNames, UseTheme} from "app/helpers";
import {AppRouter, linkConfig} from "shared/config";
import {NavBar} from "widget/ui";

export const App = () => {
    const {theme} = UseTheme();
        return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar links={linkConfig}/>
              <AppRouter/>
        </div>
    )
};