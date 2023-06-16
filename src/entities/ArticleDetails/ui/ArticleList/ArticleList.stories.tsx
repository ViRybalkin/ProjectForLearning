import { ComponentMeta, ComponentStory } from '@storybook/react';
import { articleListMocks } from '@/__mocks__';
import { ArticleList } from './ArticleList';

export default {
  argTypes: {
    articles: {
      defaultValue: articleListMocks,
    },
    view: {
      defaultValue: 'SMALL',
    },
  },
  component: ArticleList,
  title: 'entities/ArticleList',
} as ComponentMeta<typeof ArticleList>;

export const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;
