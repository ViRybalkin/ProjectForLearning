import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

export default {
  component: ArticlesPage,
  title: 'pages/ArticlesPage',
} as ComponentMeta<typeof ArticlesPage>;

export const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage />;
