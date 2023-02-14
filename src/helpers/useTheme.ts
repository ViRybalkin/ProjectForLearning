import {useContext} from "react";
import {ThemeContext, ThemeEnum} from "../themeContext/ThemeContext";
import {LOCAL_STORAGE_THEME} from "../constants/localStorage";

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