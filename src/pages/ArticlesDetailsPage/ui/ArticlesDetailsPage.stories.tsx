import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticlesDetailsPage from './ArticlesDetailsPage';

export default {
  component: ArticlesDetailsPage,
  title: 'pages/ArticlesDetailsPage',
} as ComponentMeta<typeof ArticlesDetailsPage>;

export const Template: ComponentStory<typeof ArticlesDetailsPage> = () => <ArticlesDetailsPage />;
