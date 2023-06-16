import { memo } from 'react';
import { Typography } from '@/shared/ui/Typography';
import { classNames } from '@/shared/helpers/classNames';
import { ArticleImageBlockProps } from './ArticleImageBlock.types';
import cls from './ArticleImageBlock.module.scss';
import { AppImage } from '@/shared/ui/AppImage';

export const ArticleImageBlock = memo(({ alt, classname, img, title }: ArticleImageBlockProps) => {
  return (
    <div className={classNames('', {}, [classname])}>
      <AppImage className={cls.image} src={img} alt={alt} />
      <Typography align='center' variant='h3'>
        {title}
      </Typography>
    </div>
  );
});
