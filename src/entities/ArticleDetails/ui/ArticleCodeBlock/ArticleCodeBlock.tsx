import React, { memo } from 'react';
import { Code } from 'shared/ui/Code';
import { classNames } from 'shared/config/helpers/classNames';
import { ArticleCodeBlockProps } from './ArticleCodeBlock.types';

export const ArticleCodeBlock = memo(({ text, classname }: ArticleCodeBlockProps) => {
  return (
    <div className={classNames('', {}, [classname])}>
      <Code code={text} />
    </div>
  );
});
