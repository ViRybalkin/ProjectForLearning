import { useContext } from 'react';
import { LOCAL_STORAGE_KEY } from 'shared/constants/localStorageKey';
import { ThemeContext, ThemeTypes } from './ThemeContext';

export const UseTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  document.body.className = theme || 'light';
  const onToggleTheme = () => {
    let newTheme: ThemeTypes;

    switch (theme) {
      case 'dark':
        newTheme = 'light';
        break;
      case 'light':
        newTheme = 'orange';
        break;
      case 'orange':
        newTheme = 'dark';
        break;
      default:
        newTheme = 'light';
    }
    document.body.className = newTheme;
    if (setTheme) {
      setTheme(newTheme);
    }
    localStorage.setItem(LOCAL_STORAGE_KEY.theme, newTheme);
  };

  return {
    theme: theme || 'light',
    onToggleTheme,
  };
};
