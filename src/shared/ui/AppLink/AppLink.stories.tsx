import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLink } from './AppLink';

export default {
  component: AppLink,
  title: 'shared/AppLink',
} as ComponentMeta<typeof AppLink>;

export const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args}>Click</AppLink>;
