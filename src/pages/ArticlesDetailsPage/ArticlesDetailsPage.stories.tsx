import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticlesDetailsPage from './ArticlesDetailsPage';

export default {
  title: 'pages/ArticlesDetailsPage',
  component: ArticlesDetailsPage,
} as ComponentMeta<typeof ArticlesDetailsPage>;

export const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage />;
