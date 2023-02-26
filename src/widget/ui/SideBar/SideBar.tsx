import { useCallback, useState } from 'react';
import { classNames } from 'app';
import { Button } from 'shared';
import DoubleArrowLeft from 'shared/assets/icons/double-arrow-left.svg';
import DoubleArrowRight from 'shared/assets/icons/double-arrow-right.svg';
import { LanguageSwitcher } from 'widget';
import { SideBarProps } from './SideBar.types';
import cls from './SideBar.module.scss';

const SideBar = ({ className }: SideBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const onToggle = useCallback(() => {
    setIsCollapsed((prevState) => !prevState);
  }, []);

  return (
    <aside className={classNames(cls.navBar, { [cls.collapsed]: isCollapsed }, [className])}>
      <LanguageSwitcher />
      <Button theme='clear' className={cls.collapseBtn} onClick={onToggle}>
        {isCollapsed ? (
          <DoubleArrowRight fill='#fff' width={30} height={30} />
        ) : (
          <DoubleArrowLeft fill='#fff' width={30} height={30} />
        )}
      </Button>
    </aside>
  );
};

export { SideBar };
