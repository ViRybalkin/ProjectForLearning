import { useCallback, useState } from 'react';
import { classNames } from 'shared/config/helpers/classNames';
import { Button } from 'shared/ui/Button';
import DoubleArrowLeft from 'shared/assets/icons/double-arrow-left.svg';
import DoubleArrowRight from 'shared/assets/icons/double-arrow-right.svg';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { SideBarProps } from './SideBar.types';
import cls from './SideBar.module.scss';

const SideBar = ({ className }: SideBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onToggle = useCallback(() => {
    setIsCollapsed((prevState) => !prevState);
  }, []);

  return (
    <aside
      data-testid='sideBarTestId'
      className={classNames(cls.navBar, { [cls.collapsed]: isCollapsed }, [className])}>
      <LanguageSwitcher />
      <Button data-testid='toggleSideBarBtn' theme='clear' className={cls.collapseBtn} onClick={onToggle}>
        {isCollapsed ? (
          <DoubleArrowRight data-testid='DoubleArrowRight' fill='#fff' width={30} height={30} />
        ) : (
          <DoubleArrowLeft data-testid='DoubleArrowLeft' fill='#fff' width={30} height={30} />
        )}
      </Button>
    </aside>
  );
};

export { SideBar };
