import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecommendationList } from './RecommendationList';
import { ArticleDetailsMock } from '@/__mocks__';

const url = window.location.origin;
export default {
  component: RecommendationList,
  parameters: {
    mockData: [
      {
        method: 'GET',
        response: () => {
          return [ArticleDetailsMock];
        },
        status: 200,
        url: `${url}/articles?_limit=4`,
      },
    ],
  },
  title: 'features/RecommendationList',
} as ComponentMeta<typeof RecommendationList>;

export const Template: ComponentStory<typeof RecommendationList> = () => <RecommendationList />;
