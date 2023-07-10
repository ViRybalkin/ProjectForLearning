import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext, ThemeTypes } from '../../../../shared/providers/ThemeProviders/config/ThemeContext';
import { getUserSettings } from '@/entities/User';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const userSettings = useSelector(getUserSettings);
  const defaultTheme = userSettings?.theme || 'light';
  const [theme, setTheme] = useState<ThemeTypes>(defaultTheme);
  const [isThemeInited, setIsThemeInited] = useState<boolean>(false);
  const defaultValue = useMemo(
    () => ({
      setTheme,
      theme,
    }),
    [theme]
  );

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};
