import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomLink } from './CustomLink';

export default {
  title: 'shared/CustomLink',
  component: CustomLink,
  argTypes: {
    to: {
      control: { type: 'text' },
      defaultValue: '/about',
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'О нас',
    },
  },
} as ComponentMeta<typeof CustomLink>;

export const Template: ComponentStory<typeof CustomLink> = (args) => <CustomLink {...args} />;
