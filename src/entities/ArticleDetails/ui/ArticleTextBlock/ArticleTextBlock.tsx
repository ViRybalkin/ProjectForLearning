import { memo } from 'react';
import { Typography } from '@/shared/ui/Typography';
import { classNames } from '@/shared/helpers/classNames';
import { ArticleTextBlockProps } from './ArticleTextBlock.types';
import cls from './ArticleTextBlock.module.scss';

export const ArticleTextBlock = memo(({ classname, paragraphs, title }: ArticleTextBlockProps) => {
  return (
    <div className={classNames('', {}, [classname])}>
      <Typography
        classname={cls.title}
        variant='h3'
        align='center'>
        {title}
      </Typography>
      {paragraphs.map((el) => (
        <Typography
          key={el}
          classname={cls.paragraph}>
          {el}
        </Typography>
      ))}
    </div>
  );
});
