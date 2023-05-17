import React, { memo } from 'react';
import { classNames } from 'shared/config/helpers/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { HStack } from 'shared/ui/HStack';
import { Icon } from 'shared/ui/Icon';
import { Skeleton } from 'shared/ui/Skeleton';
import { Typography } from 'shared/ui/Typography';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { useGetArticleDetailsQuery } from '../../config/service/getArticleDetails/getArticleDetails.service';
import { ArticleDetailsProps } from './ArticleDetails.types';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';

export const ArticleDetails = memo(({ articleId }: ArticleDetailsProps) => {
  const { data: articleData, isLoading, error: errorProto } = useGetArticleDetailsQuery(articleId);
  const error = JSON.stringify(errorProto);

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
      <HStack data-testid='ArticleDetailsErrorId' classname={classNames(cls.errorWrapper)}>
        <Typography variant='h1'>{error}</Typography>
      </HStack>
    );
  }

  return (
    <div>
      {articleData ? (
        <>
          <div data-testid='articleDetailsId' className={cls.mainInfoBlock}>
            <HStack fullWidth classname={cls.avatar}>
              <Avatar src={articleData?.img} alt={articleData.img} size={200} />
            </HStack>
            <Typography variant='h1'>{articleData.title}</Typography>
            <Typography variant='h2'>{articleData.subtitle}</Typography>
            <HStack gap='10' justify='start'>
              <Icon width={20} height={20} Svg={EyeIcon} />
              <Typography variant='h3'>{articleData.views}</Typography>
            </HStack>
            <HStack gap='10' justify='start'>
              <Icon width={20} height={20} Svg={CalendarIcon} />
              <Typography variant='h3'>{articleData.createdAt}</Typography>
            </HStack>
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
    </div>
  );
});
