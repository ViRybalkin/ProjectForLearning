import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { articleDetailsCommentsMock } from '@/__mocks__';

const url = window.location.origin;
export default {
  component: ArticleDetailsComments,
  parameters: {
    mockData: [
      {
        method: 'GET',
        response: () => {
          return articleDetailsCommentsMock;
        },
        status: 200,
        url: `${url}/comments?_expand=user`,
      },
    ],
  },
  title: 'features/ArticleDetailsComments',
} as ComponentMeta<typeof ArticleDetailsComments>;

export const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;
