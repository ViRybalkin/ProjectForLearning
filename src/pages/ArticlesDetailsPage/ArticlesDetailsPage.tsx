import React from 'react';
import { ArticleDetails } from 'entities';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared';
import { CommentList } from 'entities/Comments/ui';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('articlesDetails');
  const comments = [
    {
      id: '1',
      comment: 'comment 1',
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        username: 'username1',
        id: '1',
      },
    },
    {
      id: '2',
      comment: 'comment 2',
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        username: 'username2',
        id: '2',
      },
    },
    {
      id: '3',
      comment: 'comment 3',
      user: {
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        username: 'username3',
        id: '3',
      },
    },
  ];
  return (
    <div>
      <ArticleDetails articleId={id} />
      <Typography classname={cls.commentTitle} variant='h2'>
        {t('commentTitle')}
      </Typography>
      <CommentList comments={comments} />
    </div>
  );
};

export default ArticlesDetailsPage;
