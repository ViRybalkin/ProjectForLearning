import React, { memo, useCallback } from 'react';
import { Button, HStack, Input } from 'shared';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import cls from './AddCommentForm.module.scss';
import { AddCommentFormProps, AddCommentFormTypes } from './AddCommentForm.types';

export const AddCommentForm = memo(({ submitHandler }: AddCommentFormProps) => {
  const { t } = useTranslation('articlesDetails');
  const { setValue, control, getValues, watch } = useForm<AddCommentFormTypes>();
  const onSubmit = useCallback(() => {
    const comment = getValues('newComment');
    submitHandler({ newComment: comment });
    setValue('newComment', '');
  }, [getValues, setValue, submitHandler]);

  return (
    <HStack gap='20' justify='between' classname={cls.addCommentWrapper}>
      <Controller
        name='newComment'
        defaultValue=''
        control={control}
        render={({ field }) => <Input size='medium' fullWidth placeholder={t('addNewComment')} {...field} />}
      />
      <Button theme='contained' type='submit' onClick={onSubmit}>
        Отправить
      </Button>
    </HStack>
  );
});
