import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
  title: 'shared/StarRating',
  component: StarRating,
} as ComponentMeta<typeof StarRating>;

export const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;