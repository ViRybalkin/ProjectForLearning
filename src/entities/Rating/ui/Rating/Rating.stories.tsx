import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Rating } from './Rating';

export default {
  title: 'entities/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

export const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;
