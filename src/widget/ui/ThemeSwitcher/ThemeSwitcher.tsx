import { Button } from 'shared';
import { UseTheme } from 'app';
import DarkMode from 'shared/assets/icons/dark-mode.svg';
import LightMode from 'shared/assets/icons/light-mode.svg';

const ThemeSwitcher = () => {
  const { theme, onToggleTheme } = UseTheme();
  return (
    <Button data-testid='themeSwitcherId' theme='clear' onClick={onToggleTheme}>
      {theme === 'dark' ? (
        <DarkMode fill='#000' width={30} height={30} />
      ) : (
        <LightMode fill='#fff' width={30} height={30} />
      )}
    </Button>
  );
};

export { ThemeSwitcher };
