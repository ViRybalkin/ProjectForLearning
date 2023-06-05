import React, { memo } from 'react';
import { Typography } from '@/shared/ui/Typography';
import { classNames } from '@/shared/helpers/classNames';
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
