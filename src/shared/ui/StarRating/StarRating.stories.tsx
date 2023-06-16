import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
  component: StarRating,
  title: 'shared/StarRating',
} as ComponentMeta<typeof StarRating>;

export const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;
