import React, { FormEvent, memo, useCallback } from 'react';
import { ViewSelector } from 'features';
import { ArticleListView, ArticleSortList } from 'entities';
import { ArticleListAction, getArticleListView } from 'pages/ArticlesPage/config';
import { useAppDispatch } from 'app';
import { useSelector } from 'react-redux';
import { Input, Tabs } from 'shared';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import cls from './ArticlesFilters.module.scss';
import { ArticleFiltersProps } from '../../config/types/ArticleFilters.types';

export const ArticlesFilters = memo(
  ({ onFieldChange, onDirectionChange, onSearchChange, onTabChange }: ArticleFiltersProps) => {
    const { t } = useTranslation('articlesDetails');
    const dispatch = useAppDispatch();
    const articleListView = useSelector(getArticleListView);
    const { handleSubmit, control, setValue, watch } = useForm();

    const onViewClickHandler = useCallback(
      (view: ArticleListView) => {
        dispatch(ArticleListAction.setArticleListView(view));
      },
      [dispatch]
    );

    const onSearchChangeHandler = useCallback(
      (e: FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setValue('search', value);
        onSearchChange(value);
      },
      [onSearchChange, setValue]
    );

    const tabs = [
      {
        value: 'all',
        content: 'Все стать',
      },
      {
        value: 'IT',
        content: 'IT',
      },
      {
        value: 'KEK',
        content: 'KEK',
      },
    ];

    return (
      <div className={cls.filtersWrapper}>
        <div className={cls.sortView}>
          <ArticleSortList onDirectionChange={onDirectionChange} onFieldChange={onFieldChange} />
          <ViewSelector view={articleListView} onViewClick={onViewClickHandler} />
        </div>
        <Controller
          name='search'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <Input
              className={cls.filtersWrapper}
              fullWidth
              size='medium'
              placeholder={t('searchInput')}
              {...field}
              onChange={onSearchChangeHandler}
            />
          )}
        />
        <Tabs onTabChange={onTabChange} tabs={tabs} value='IT' />
      </div>
    );
  }
);
