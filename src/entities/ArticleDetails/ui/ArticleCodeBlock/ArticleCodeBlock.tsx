import { memo } from 'react';
import { Code } from '@/shared/ui/Code';
import { classNames } from '@/shared/helpers/classNames';
import { ArticleCodeBlockProps } from './ArticleCodeBlock.types';

export const ArticleCodeBlock = memo(({ classname, text }: ArticleCodeBlockProps) => {
  return (
    <div className={classNames('', {}, [classname])}>
      <Code code={text} />
    </div>
  );
});
