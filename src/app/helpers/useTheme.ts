import {useContext} from "react";
import {LOCAL_STORAGE_THEME, ThemeContext, ThemeEnum} from "app";

export const UseTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const onToggleTheme = () => {
        const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme)
    };

    return {
        theme,
        onToggleTheme,
    }
}