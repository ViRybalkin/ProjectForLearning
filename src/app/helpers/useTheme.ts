import { useContext } from 'react';
import { LOCAL_STORAGE_THEME, ThemeContext } from 'app';

export const UseTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  document.body.className = theme;
  const onToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.className = newTheme;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
  };

  return {
    theme,
    onToggleTheme,
  };
};
