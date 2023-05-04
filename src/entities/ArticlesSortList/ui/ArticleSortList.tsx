import React, { FormEvent, memo, useCallback } from 'react';
import { ArticleSortListProps } from 'entities/ArticlesSortList/config/types';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared';
import { Controller, useForm } from 'react-hook-form';
import cls from './ArticleListSort.module.scss';

export const ArticleSortList = memo(({ onFieldChange, onDirectionChange }: ArticleSortListProps) => {
  const { t } = useTranslation('articlesDetails');
  const { handleSubmit, control, setValue, watch } = useForm();

  const fieldOptions = [
    {
      value: 'views',
      content: t('sortFieldViews'),
    },
    {
      value: 'title',
      content: t('sortFieldTitle'),
    },
    {
      value: 'createdAt',
      content: t('sortFieldDate'),
    },
  ];

  const directionOptions = [
    {
      value: 'asc',
      content: t('ascSortDirection'),
    },
    {
      value: 'desc',
      content: t('descSortDirection'),
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
          <Select label={t('articleSortFiled')} options={fieldOptions} {...field} onChange={onSortFieldChangeHandler} />
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
