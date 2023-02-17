import { useContext } from 'react';
import { LOCAL_STORAGE_THEME, ThemeContext } from 'app';

export const UseTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
  };

  return {
    theme,
    onToggleTheme,
  };
};
