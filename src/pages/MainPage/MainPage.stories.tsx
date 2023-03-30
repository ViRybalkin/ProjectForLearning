import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

export const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;
