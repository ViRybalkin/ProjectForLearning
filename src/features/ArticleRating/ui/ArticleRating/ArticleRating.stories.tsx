import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleRating } from './ArticleRating';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
} as ComponentMeta<typeof ArticleRating>;

export const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;