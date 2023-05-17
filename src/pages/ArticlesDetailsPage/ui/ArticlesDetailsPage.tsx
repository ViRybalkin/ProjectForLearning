import React from 'react';
import { ArticleDetails } from 'entities/ArticleDetails';
import { useParams } from 'react-router-dom';
import { Page } from 'widget/ui/Page';
import { RecommendationList } from 'features/RecommendationList';
import { ArticleDetailsComments } from 'features/ArticleDetailsComments';
import { ArticleDetailsHeader } from './components';

const ArticlesDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <ArticleDetailsHeader />
      {id ? (
        <>
          <ArticleDetails articleId={id} />
          <RecommendationList />
          <ArticleDetailsComments articleId={id} />
        </>
      ) : null}
    </Page>
  );
};

export default ArticlesDetailsPage;
