import React, { memo, useEffect } from 'react';
import { DynamicComponent, useAppDispatch } from 'app';
import { ArticleDetailsReducer, getArticleDetails } from 'entities';
import { ArticleDetailsProps } from './ArticleDetails.types';

export const ArticleDetails = memo(({ articleId }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const reducer = {
    articleDetails: ArticleDetailsReducer,
  };

  useEffect(() => {
    if (articleId) {
      dispatch(getArticleDetails(articleId));
    }
  }, [articleId, dispatch]);

  return (
    <DynamicComponent shouldRemoveAfterUnmount reducers={reducer}>
      article details {articleId}
    </DynamicComponent>
  );
});
