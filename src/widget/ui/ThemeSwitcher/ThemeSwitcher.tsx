import { Button } from 'shared';
import { UseTheme } from 'app';
import DarkMode from 'shared/assets/icons/dark-mode.svg';
import LightMode from 'shared/assets/icons/light-mode.svg';
import OrangeMode from 'shared/assets/icons/orange-mode.svg';
import { memo } from 'react';

const ThemeSwitcher = memo(() => {
  const { theme, onToggleTheme } = UseTheme();

  return (
    <Button data-testid='themeSwitcherId' theme='clear' onClick={onToggleTheme}>
      {theme === 'dark' && <DarkMode data-testid='darkIconId' fill='#000' width={30} height={30} />}
      {theme === 'light' && <LightMode data-testid='lightIconId' fill='#fff' width={30} height={30} />}
      {theme === 'orange' && <OrangeMode data-testid='orangeIconId' fill='#D0675D' width={30} height={30} />}
    </Button>
  );
});

export { ThemeSwitcher };
