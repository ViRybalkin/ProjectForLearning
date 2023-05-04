import React, { FormEvent, memo, useCallback } from 'react';
import { ViewSelector } from 'features';
import { ArticleListView, ArticleSortList } from 'entities';
import { useAppDispatch } from 'app';
import { useSelector } from 'react-redux';
import { Input, TabItem, Tabs, useDebounce } from 'shared';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { ArticleListAction, getArticleList, getArticleListType, getArticleListView } from '../../config';
import cls from './ArticlesFilters.module.scss';

export const ArticlesFilters = memo(() => {
  const { t } = useTranslation('articlesDetails');
  const dispatch = useAppDispatch();
  const articleListView = useSelector(getArticleListView);
  const type = useSelector(getArticleListType);
  const { control, setValue } = useForm();

  const fetchData = useCallback(() => {
    dispatch(getArticleList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(() => fetchData(), 500);

  const onFiledChangeHandler = useCallback(
    (value: string) => {
      dispatch(ArticleListAction.setSortField(value));
      dispatch(ArticleListAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onDirectionChangeHandler = useCallback(
    (value: string) => {
      dispatch(ArticleListAction.setSortDirection(value));
      dispatch(ArticleListAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onTabChangeHandler = useCallback(
    (tab: TabItem) => {
      dispatch(ArticleListAction.setType(tab.value));
      dispatch(ArticleListAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onViewClickHandler = useCallback(
    (view: ArticleListView) => {
      dispatch(ArticleListAction.setArticleListView(view));
      dispatch(ArticleListAction.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onSearchChangeHandler = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setValue('search', value);
      dispatch(ArticleListAction.setSearchValue(value));
      dispatch(ArticleListAction.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch, setValue]
  );

  const types = [
    {
      value: 'all',
      content: t('typeAll'),
    },
    {
      value: 'IT',
      content: t('typeIt'),
    },
    {
      value: 'BUSINESS',
      content: t('typeBusiness'),
    },
    {
      value: 'MECHANICS',
      content: t('typeMechanic'),
    },
  ];

  return (
    <div className={cls.filtersWrapper}>
      <div className={cls.sortView}>
        <ArticleSortList onDirectionChange={onDirectionChangeHandler} onFieldChange={onFiledChangeHandler} />
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
      <Tabs onTabChange={onTabChangeHandler} tabs={types} value={type} />
    </div>
  );
});
