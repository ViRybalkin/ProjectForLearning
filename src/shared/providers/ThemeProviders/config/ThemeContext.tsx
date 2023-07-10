import {createContext} from 'react';

export type ThemeTypes = 'light' | 'dark' | 'orange';

export interface ThemeContextProps {
    theme?: ThemeTypes;
    setTheme?: (theme: ThemeTypes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
