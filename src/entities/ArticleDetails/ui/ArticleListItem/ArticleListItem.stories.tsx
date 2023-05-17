import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { articleListMocks } from '__mocks__';
import { ArticleListItem } from './ArticleListItem';

export default {
  title: 'entities/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    article: {
      defaultValue: articleListMocks[0],
    },
    view: {
      defaultValue: 'SMALL',
    },
  },
} as ComponentMeta<typeof ArticleListItem>;

export const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;
