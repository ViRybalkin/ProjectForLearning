import { LOCAL_STORAGE_THEME, ThemeContext, ThemeTypes } from 'app/providers/themeProviders';
import { FC, useMemo, useState } from 'react';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME) as ThemeTypes) || 'light';

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypes>(defaultTheme);
  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};
