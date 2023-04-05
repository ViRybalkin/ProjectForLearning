import React, { memo, useEffect } from 'react';
import { classNames, DynamicComponent, useAppDispatch } from 'app';
import { useSelector } from 'react-redux';
import { Typography } from 'shared';
import { Skeleton } from 'shared/ui/Skeleton';
import { ArticleDetailsReducer, getArticleDetails } from '../../config';
import { getArticleDetailsError, getArticleDetailsIsLoading } from '../../config/selectors';
import { ArticleDetailsProps } from './ArticleDetails.types';
import cls from './ArticleDetails.module.scss';

export const ArticleDetails = memo(({ articleId }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const reducer = {
    articleDetails: ArticleDetailsReducer,
  };

  useEffect(() => {
    if (articleId) {
      dispatch(getArticleDetails(articleId));
    }
  }, [articleId, dispatch]);

  if (error) {
    return (
      <div data-testid='ArticleDetailsErrorId' className={classNames(cls.errorWrapper)}>
        <Typography variant='h1'>{error}</Typography>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div data-testid='ArticleDetailsSkeletonId' className={classNames(cls.loadingWrapper)}>
        <Skeleton className={cls.loadingWrapper__avatar} height={200} width={200} borderRadius={100} />
        <Skeleton className={cls.loadingWrapper__mb20} height={20} width={500} borderRadius={5} />
        <Skeleton className={cls.loadingWrapper__mb20} height={20} width={400} borderRadius={5} />
        <Skeleton className={cls.loadingWrapper__mb20} height={20} width={100} borderRadius={5} />
        <Skeleton className={cls.loadingWrapper__mb20} height={20} width={70} borderRadius={5} />
        <Skeleton className={cls.loadingWrapper__mb20} height={250} width='100%' borderRadius={5} />
        <Skeleton className={cls.loadingWrapper__mb20} height={250} width='100%' borderRadius={5} />
        <Skeleton className={cls.loadingWrapper__mb20} height={250} width='100%' borderRadius={5} />
      </div>
    );
  }

  return (
    <DynamicComponent shouldRemoveAfterUnmount reducers={reducer}>
      article details {articleId}
    </DynamicComponent>
  );
});
