import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { articleListMocks } from '__mocks__';
import { ArticleList } from './ArticleList';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
  argTypes: {
    articles: {
      defaultValue: articleListMocks,
    },
    view: {
      defaultValue: 'SMALL',
    },
  },
} as ComponentMeta<typeof ArticleList>;

export const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;
