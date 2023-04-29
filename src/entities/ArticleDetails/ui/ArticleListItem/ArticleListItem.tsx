import React, { memo, useCallback } from 'react';
import { Avatar, Button, Card, Icon, Typography } from 'shared';
import { classNames } from 'app';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { useNavigate } from 'react-router-dom';
import { routerPath } from 'shared/config/routes/Routes';
import { ArticleListItemProps } from './ArticleListItem.types';
import cls from './ArticleListItem.module.scss';
import { ArticleDetailsTextBlock } from '../../config/types/article.types';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

export const ArticleListItem = memo(({ article, view }: ArticleListItemProps) => {
  const types = article.type.join(', ');
  const articleTextBlock = article.blocks.find((el) => el.type === 'TEXT') as ArticleDetailsTextBlock;
  const navigate = useNavigate();

  const onOpenArticleClick = useCallback(() => {
    navigate(routerPath.articlesDetailsPage + article.id);
  }, [article.id, navigate]);

  if (view === 'BIG') {
    return (
      <div className={classNames('', {}, [cls[view]])}>
        <Card>
          <div className={cls.header}>
            <div className={cls.userInfo}>
              <Avatar src={article.user.avatar} alt={article.img} size={35} />
              <Typography>{article.user.username}</Typography>
            </div>
            <Typography>{article.createdAt}</Typography>
          </div>
          <Typography variant='h2' classname={cls.articleTitle}>
            {article.title}
          </Typography>
          <div className={cls.types}>{types}</div>
          <img src={article.img} alt={article.img} className={cls.img} />
          {articleTextBlock ? (
            <ArticleTextBlock
              classname={cls.articleText}
              title={articleTextBlock.title}
              paragraphs={articleTextBlock.paragraphs}
            />
          ) : null}
          <div className={cls.footer}>
            <Button theme='contained' onClick={onOpenArticleClick}>
              Читать далее...
            </Button>
            <div className={cls.blockWithIcon}>
              <Typography>{article.views}</Typography>
              <Icon width={20} height={20} Svg={EyeIcon} />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [cls[view]])}>
      <Card onClick={onOpenArticleClick}>
        <div className={cls.imgWrapper}>
          <img src={article.img} className={cls.img} alt={article.img} />
          <Typography classname={cls.date}>{article.createdAt}</Typography>
        </div>
        <div className={cls.infoWrapper}>
          <div>{types}</div>
          <div className={cls.blockWithIcon}>
            <Typography>{article.views}</Typography>
            <Icon width={20} height={20} Svg={EyeIcon} />
          </div>
        </div>
        <Typography classname={cls.articleTitle}>{article.title}</Typography>
      </Card>
    </div>
  );
});
