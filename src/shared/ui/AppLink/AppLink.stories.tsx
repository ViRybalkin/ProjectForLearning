import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

export const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args}>Click</AppLink>;
