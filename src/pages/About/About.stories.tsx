import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import About from './About';

export default {
  title: 'pages/About',
  component: About,
} as ComponentMeta<typeof About>;

export const Template: ComponentStory<typeof About> = () => <About />;
