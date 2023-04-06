import React, { memo } from 'react';
import { Typography } from 'shared';
import { classNames } from 'app';
import { ArticleImageBlockProps } from './ArticleImageBlock.types';
import cls from './ArticleImageBlock.module.scss';

export const ArticleImageBlock = memo(({ img, alt, title, classname }: ArticleImageBlockProps) => {
  return (
    <div className={classNames('', {}, [classname])}>
      <img className={cls.image} src={img} alt={alt} />
      <Typography align='center' variant='h3'>
        {title}
      </Typography>
    </div>
  );
});
