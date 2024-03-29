import { FormEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { ViewSelector } from '@/features/ViewSelector';
import { ArticleSortList } from '@/entities/ArticlesSortList';
import { useAppDispatch } from '@/shared/helpers/useAppDispatch';
import { HStack } from '@/shared/ui/HStack';
import { Input } from '@/shared/ui/Input';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { useDebounce } from '@/shared/helpers/useDebounce';
import { ArticleListView } from '@/entities/ArticleDetails';
import { getArticleListType } from '../../config/selectors/getArticleListType';
import { getArticleListView } from '../../config/selectors/getArticleListView';
import { ArticleListAction } from '../../config/slice/articlesSlice';
import { getArticleList } from '../../config/service/getArticles.service';
import cls from './ArticlesFilters.module.scss';
import { getFeatureFlag } from '@/shared/featureFlag';

export const ArticlesFilters = memo(() => {
  const { t } = useTranslation('articlesDetails');
  const dispatch = useAppDispatch();
  const articleListView = useSelector(getArticleListView);
  const type = useSelector(getArticleListType);
  const { control, setValue } = useForm();
  const isFiltersEnable = getFeatureFlag('isFiltersEnable');
  const isSearchEnable = getFeatureFlag('isSearchEnable');

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
      content: t('typeAll'),
      value: 'all',
    },
    {
      content: t('typeIt'),
      value: 'IT',
    },
    {
      content: t('typeBusiness'),
      value: 'BUSINESS',
    },
    {
      content: t('typeMechanic'),
      value: 'MECHANICS',
    },
  ];

  return (
    <div className={cls.filtersWrapper}>
      <div>
        <HStack
          justify='between'
          align='end'
          classname={cls.sortView}>
          <ArticleSortList
            onDirectionChange={onDirectionChangeHandler}
            onFieldChange={onFiledChangeHandler}
          />
          <ViewSelector
            view={articleListView}
            onViewClick={onViewClickHandler}
          />
        </HStack>
      </div>
      {isSearchEnable && (
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
      )}
      {isFiltersEnable && (
        <Tabs
          onTabChange={onTabChangeHandler}
          tabs={types}
          value={type}
        />
      )}
    </div>
  );
});
