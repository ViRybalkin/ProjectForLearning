import React from 'react';
import { ArticleDetails } from 'entities';
import { useParams } from 'react-router-dom';
import { Page } from 'widget';
import { ArticleDetailsComments, RecommendationList } from 'features';
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
