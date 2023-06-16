import { ComponentMeta, ComponentStory } from '@storybook/react';
import { articleListMocks } from '@/__mocks__';
import { ArticleListItem } from './ArticleListItem';

export default {
  argTypes: {
    article: {
      defaultValue: articleListMocks[0],
    },
    view: {
      defaultValue: 'SMALL',
    },
  },
  component: ArticleListItem,
  title: 'entities/ArticleListItem',
} as ComponentMeta<typeof ArticleListItem>;

export const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;
