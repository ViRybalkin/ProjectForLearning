import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import About from './About';

export default {
  title: 'pages/About',
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Primary = Template.bind({});
