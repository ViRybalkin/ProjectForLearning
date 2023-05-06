import React, { memo, useCallback } from 'react';
import { Card } from 'shared';
import { TabItem, TabsProps } from './Tabs.types';
import cls from './Tabs.module.scss';

export const Tabs = memo(({ tabs, value, onTabChange }: TabsProps) => {
  const onTabClickHandler = useCallback(
    (tab: TabItem) => {
      onTabChange(tab);
    },
    [onTabChange]
  );

  return (
    <div className={cls.tabsWrapper}>
      {tabs.map((tab) => {
        return (
          <Card
            key={tab.value}
            onClick={() => onTabClickHandler(tab)}
            theme={tab.value === value ? 'outlined' : 'normal'}
            classname={cls.tabs}>
            {tab.content}
          </Card>
        );
      })}
    </div>
  );
});
