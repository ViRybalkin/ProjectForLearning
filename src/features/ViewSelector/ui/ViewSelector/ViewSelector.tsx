import { memo, useCallback } from 'react';
import ListView from '@/shared/assets/icons/list-view.svg';
import TableView from '@/shared/assets/icons/table-view.svg';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/HStack';
import { Icon } from '@/shared/ui/Icon';
import { ArticleListView } from '@/entities/ArticleDetails';
import { classNames } from '@/shared/helpers/classNames';
import { ViewSelectorProps, ViewsList } from './ViewSelector.types';
import cls from './ViewSelector.module.scss';

export const ViewSelector = memo(({ view, onViewClick }: ViewSelectorProps) => {
  const views: Array<ViewsList> = [
    {
      view: 'SMALL',
      icon: TableView,
    },
    {
      view: 'BIG',
      icon: ListView,
    },
  ];

  const onViewClickHandler = useCallback(
    (newView: ArticleListView) => {
      onViewClick(newView);
    },
    [onViewClick]
  );
  return (
    <HStack justify='start' gap='10'>
      {views.map((el) => {
        return (
          <Button key={el.view} style={{ fill: 'blue' }} theme='clear' onClick={() => onViewClickHandler(el.view)}>
            <Icon
              Svg={el.icon}
              height={30}
              width={30}
              classname={classNames('', { [cls.notSelected]: view !== el.view })}
            />
          </Button>
        );
      })}
    </HStack>
  );
});
