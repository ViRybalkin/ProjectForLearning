import React, { memo, useCallback } from 'react';
import { Button, Input } from 'shared';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { DynamicComponent } from 'app';
import cls from './AddCommentForm.module.scss';
import { AddCommentFormProps, AddCommentFormTypes } from '../config/types/AddCommentForm.types';
import { ArticleDetailsReducer } from '../config/slice/AddCommentFormSlice';

const reducer = {
  addCommentForm: ArticleDetailsReducer,
};
export const AddCommentForm = memo(({ submitHandler }: AddCommentFormProps) => {
  const { t } = useTranslation('articlesDetails');
  const { setValue, control, getValues, watch } = useForm<AddCommentFormTypes>();
  const onSubmit = useCallback(() => {
    const comment = getValues('newComment');
    submitHandler({ newComment: comment });
    setValue('newComment', '');
  }, [getValues, setValue, submitHandler]);

  return (
    <DynamicComponent reducers={reducer} shouldRemoveAfterUnmount>
      <div className={cls.addCommentWrapper}>
        <Controller
          name='newComment'
          defaultValue=''
          control={control}
          render={({ field }) => <Input size='medium' fullWidth placeholder={t('addNewComment')} {...field} />}
        />
        <Button theme='contained' type='submit' onClick={onSubmit}>
          Отправить
        </Button>
      </div>
    </DynamicComponent>
  );
});
