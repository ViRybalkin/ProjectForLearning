import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleRating } from './ArticleRating';

const url = window.location.origin;
export default {
  component: ArticleRating,
  parameters: {
    mockData: [
      {
        method: 'GET',
        response: {},
        status: 200,
        url: `${url}/rating?userId=`,
      },
    ],
  },
  title: 'features/ArticleRating',
} as ComponentMeta<typeof ArticleRating>;

export const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;
