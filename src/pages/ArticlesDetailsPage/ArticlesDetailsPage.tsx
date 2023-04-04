import React from 'react';
import { ArticleDetails } from 'entities';
import { useParams } from 'react-router-dom';

const ArticlesDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  return <ArticleDetails articleId={id} />;
};

export default ArticlesDetailsPage;
