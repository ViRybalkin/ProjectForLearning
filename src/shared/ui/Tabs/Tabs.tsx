import React, { memo, useCallback } from 'react';
import { Card, HStack } from 'shared';
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
    <HStack gap='10' justify="start">
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
    </HStack>
  );
});
