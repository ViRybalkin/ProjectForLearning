import { createContext } from 'react';

export type ThemeTypes = 'light' |'dark';

export interface ThemeContextProps {
    theme?: ThemeTypes;
    setTheme?: (theme: ThemeTypes) => void
}

export const LOCAL_STORAGE_THEME = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
