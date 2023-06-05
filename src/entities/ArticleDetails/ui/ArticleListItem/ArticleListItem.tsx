import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { classNames } from '@/shared/helpers/classNames';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleListItemProps } from './ArticleListItem.types';
import cls from './ArticleListItem.module.scss';
import { ArticleDetailsTextBlock } from '../../config/types/article.types';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { routerPath } from '@/shared/constants';

export const ArticleListItem = memo(({ article, view, target }: ArticleListItemProps) => {
  const { t } = useTranslation('articlesDetails');
  const types = article.type.join(' ');
  const articleTextBlock = article.blocks.find((el) => el.type === 'TEXT') as ArticleDetailsTextBlock;

  const blockWithIcon = (
    <div className={cls.blockWithIcon}>
      <Typography>{article.views}</Typography>
      <Icon width={20} height={20} Svg={EyeIcon} />
    </div>
  );

  if (view === 'BIG') {
    return (
      <Card classname={classNames('', {}, [cls[view]])}>
        <div data-testid='articleListItemBig' className={cls.header}>
          <div className={cls.userInfo}>
            <Avatar src={article.user.avatar} alt={article.img} size={35} />
            <Typography>{article.user.username}</Typography>
          </div>
          <Typography>{article.createdAt}</Typography>
        </div>
        <Typography variant='h2' classname={cls.articleTitle}>
          {article.title}
        </Typography>
        <Typography classname={cls.types}>{types}</Typography>
        <img src={article.img} alt={article.img} className={cls.img} />
        {articleTextBlock ? (
          <ArticleTextBlock
            classname={cls.articleText}
            title={articleTextBlock.title}
            paragraphs={articleTextBlock.paragraphs}
          />
        ) : null}
        <div className={cls.footer}>
          <AppLink to={routerPath.articlesDetailsPage + article.id}>
            <Button theme='contained'>{t('readMore')}</Button>
          </AppLink>
          {blockWithIcon}
        </div>
      </Card>
    );
  }

  return (
    <AppLink to={routerPath.articlesDetailsPage + article.id} target={target}>
      <Card classname={classNames('', {}, [cls[view]])}>
        <div data-testid='articleListItemSmall' className={cls.imgWrapper}>
          <img src={article.img} className={cls.img} alt={article.img} />
          <Typography classname={cls.date}>{article.createdAt}</Typography>
        </div>
        <div className={cls.infoWrapper}>
          <Typography>{types}</Typography>
          {blockWithIcon}
        </div>
        <Typography classname={cls.articleTitle}>{article.title}</Typography>
      </Card>
    </AppLink>
  );
});
