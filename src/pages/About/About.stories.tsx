import { ComponentMeta, ComponentStory } from '@storybook/react';

import About from './About';

export default {
  component: About,
  title: 'pages/About',
} as ComponentMeta<typeof About>;

export const Template: ComponentStory<typeof About> = () => <About />;
