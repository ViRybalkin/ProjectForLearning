import React, { memo } from 'react';
import { Code } from 'shared';
import { classNames } from 'app';
import { ArticleCodeBlockProps } from './ArticleCodeBlock.types';

export const ArticleCodeBlock = memo(({ text, classname }: ArticleCodeBlockProps) => {
  return (
    <div className={classNames('', {}, [classname])}>
      <Code code={text} />
    </div>
  );
});
