import React, { memo, useEffect } from 'react';
import { classNames, DynamicComponent, useAppDispatch } from 'app';
import { useSelector } from 'react-redux';
import { Avatar, Icon, Skeleton, Typography } from 'shared';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleDetailsReducer, getArticleDetails } from '../../config';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../config/selectors';
import { ArticleDetailsProps } from './ArticleDetails.types';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';

export const ArticleDetails = memo(({ articleId }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const error = useSelector(getArticleDetailsError);
  const articleData = useSelector(getArticleDetailsData);
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

  if (error) {
    return (
      <div data-testid='ArticleDetailsErrorId' className={classNames(cls.errorWrapper)}>
        <Typography variant='h1'>{error}</Typography>
      </div>
    );
  }

  return (
    <DynamicComponent shouldRemoveAfterUnmount reducers={reducer}>
      {articleData ? (
        <>
          <div data-testid='articleDetailsId' className={cls.mainInfoBlock}>
            <div className={cls.avatar}>
              <Avatar src={articleData?.img} alt={articleData.img} size={200} />
            </div>
            <Typography variant='h1'>{articleData.title}</Typography>
            <Typography variant='h2'>{articleData.subtitle}</Typography>
            <div className={cls.blockWithIcon}>
              <Icon width={20} height={20} Svg={EyeIcon} />
              <Typography variant='h3'>{articleData.views}</Typography>
            </div>
            <div className={cls.blockWithIcon}>
              <Icon width={20} height={20} Svg={CalendarIcon} />
              <Typography variant='h3'>{articleData.createdAt}</Typography>
            </div>
          </div>
          {articleData?.blocks &&
            articleData?.blocks.map((el) => {
              if (el.type === 'CODE') {
                return <ArticleCodeBlock classname={cls.block} key={el.id} text={el.code} />;
              }
              if (el.type === 'TEXT') {
                return (
                  <ArticleTextBlock classname={cls.block} key={el.id} title={el.title} paragraphs={el.paragraphs} />
                );
              }
              if (el.type === 'IMAGE') {
                return (
                  <ArticleImageBlock classname={cls.block} key={el.id} title={el.title} alt={el.src} img={el.src} />
                );
              }
              return null;
            })}
        </>
      ) : null}
    </DynamicComponent>
  );
});
