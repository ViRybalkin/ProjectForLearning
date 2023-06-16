import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainPage from './MainPage';

export default {
  component: MainPage,
  title: 'pages/MainPage',
} as ComponentMeta<typeof MainPage>;

export const Template: ComponentStory<typeof MainPage> = () => <MainPage />;
