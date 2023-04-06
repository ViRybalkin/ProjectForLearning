import React, { memo } from 'react';
import { Typography } from 'shared';
import { classNames } from 'app';
import { ArticleTextBlockProps } from './ArticleTextBlock.types';
import cls from './ArticleTextBlock.module.scss';

export const ArticleTextBlock = memo(({ paragraphs, title, classname }: ArticleTextBlockProps) => {
  return (
    <div className={classNames('', {}, [classname])}>
      <Typography classname={cls.title} variant='h3' align='center'>
        {title}
      </Typography>
      {paragraphs.map((el) => (
        <Typography classname={cls.paragraph}>{el}</Typography>
      ))}
    </div>
  );
});
