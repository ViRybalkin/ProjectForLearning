import { ComponentMeta, ComponentStory } from '@storybook/react';

import NotFound from './NotFound';

export default {
  component: NotFound,
  title: 'pages/NotFound',
} as ComponentMeta<typeof NotFound>;

export const Template: ComponentStory<typeof NotFound> = () => <NotFound />;
