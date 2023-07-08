import { useParams } from 'react-router-dom';
import { Page } from '@/widget/Page';
import { ArticleDetails } from '@/entities/ArticleDetails';
import { RecommendationList } from '@/features/RecommendationList';
import { ArticleDetailsComments } from '@/features/ArticleDetailsComments';
import { ArticleDetailsHeader } from './components';
import { ArticleRating } from '@/features/ArticleRating';
import { VStack } from '@/shared/ui/VStack';
import { toggleFeature } from '@/shared/featureFlag/toggleFeature';

const ArticlesDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const counter = toggleFeature({
    name: 'isFiltersEnable',
    off: () => <div>off</div>,
    on: () => <div>on</div>,
  });

  return (
    <Page>
      <ArticleDetailsHeader />
      {counter}
      {id ? (
        <VStack
          gap='20'
          fullWidth>
          <ArticleDetails articleId={id} />
          <ArticleRating articleId={id} />
          <RecommendationList />
          <ArticleDetailsComments articleId={id} />
        </VStack>
      ) : null}
    </Page>
  );
};

export default ArticlesDetailsPage;
