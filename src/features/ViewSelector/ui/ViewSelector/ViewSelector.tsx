import React, { memo, useCallback } from 'react';
import ListView from 'shared/assets/icons/list-view.svg';
import TableView from 'shared/assets/icons/table-view.svg';
import { Button, Icon } from 'shared';
import { ArticleListView } from 'entities';
import { classNames } from 'app';
import { ViewSelectorProps, ViewsList } from '../../config/types/ViewSelector.types';
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
    <div className={cls.viewSelectorWrapper}>
      {views.map((el) => {
        return (
          <Button key={el.view} style={{ fill: 'blue' }} theme='clear' onClick={() => onViewClickHandler(el.view)}>
            <Icon
              Svg={el.icon}
              height={20}
              width={20}
              classname={classNames('', { [cls.notSelected]: view !== el.view })}
            />
          </Button>
        );
      })}
    </div>
  );
});
