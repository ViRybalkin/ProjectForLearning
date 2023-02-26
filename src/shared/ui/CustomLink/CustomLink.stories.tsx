import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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

export const DefaultButton: ComponentStory<typeof CustomLink> = (args) => (<CustomLink {...args} />);