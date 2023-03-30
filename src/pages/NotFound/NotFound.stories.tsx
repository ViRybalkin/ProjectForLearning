import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import NotFound from './NotFound';

export default {
  title: 'pages/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

export const Template: ComponentStory<typeof NotFound> = (args) => <NotFound />;
