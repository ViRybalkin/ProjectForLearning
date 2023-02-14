import {LOCAL_STORAGE_THEME, ThemeContext, ThemeEnum} from "app/providers/themeProviders";
import React, {FC, useMemo, useState} from "react";

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
