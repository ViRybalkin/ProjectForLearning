import {ThemeContext, ThemeEnum} from "./ThemeContext";
import React, {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME} from "../constants/localStorage";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as ThemeEnum ||ThemeEnum.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<ThemeEnum>(defaultTheme)
    const defaultValue = useMemo(() => ({
            theme: theme,
            setTheme: setTheme,
    }),[theme])

    return (
        <ThemeContext.Provider value={defaultValue} >
            {children}
        </ThemeContext.Provider>
    )
}
