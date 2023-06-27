import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { Select } from '@/shared/ui/Select';
import { ArticleSortListProps } from './ArticleSortList.types';
import cls from './ArticleListSort.module.scss';

export const ArticleSortList = memo(({ onDirectionChange, onFieldChange }: ArticleSortListProps) => {
  const { t } = useTranslation('articlesDetails');
  const { control, setValue } = useForm();

  const fieldOptions = [
    {
      content: t('sortFieldViews'),
      value: 'views',
    },
    {
      content: t('sortFieldTitle'),
      value: 'title',
    },
    {
      content: t('sortFieldDate'),
      value: 'createdAt',
    },
  ];

  const directionOptions = [
    {
      content: t('ascSortDirection'),
      value: 'asc',
    },
    {
      content: t('descSortDirection'),
      value: 'desc',
    },
  ];

  const onSortDirectionChangeHandler = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      const { value } = e.currentTarget;
      setValue('direction', value);
      onDirectionChange(value);
    },
    [onDirectionChange, setValue]
  );

  const onSortFieldChangeHandler = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      const { value } = e.currentTarget;
      setValue('field', value);
      onFieldChange(value);
    },
    [onFieldChange, setValue]
  );

  return (
    <div className={cls.sortListWrapper}>
      <Controller
        name='field'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Select
            label={t('articleSortFiled')}
            options={fieldOptions}
            {...field}
            onChange={onSortFieldChangeHandler}
          />
        )}
      />{' '}
      <Controller
        name='direction'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Select
            label={t('articleSortDirection')}
            options={directionOptions}
            {...field}
            onChange={onSortDirectionChangeHandler}
          />
        )}
      />
    </div>
  );
});
