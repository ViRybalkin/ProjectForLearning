import { ThemeContext, ThemeTypes } from 'app/providers/themeProviders';
import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY } from 'shared';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_KEY.theme) as ThemeTypes) || 'light';

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
