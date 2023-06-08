import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      type: 'number',
      defaultValue: 100,
    },
    height: {
      type: 'number',
      defaultValue: 100,
    },
    borderRadius: {
      type: 'number',
      defaultValue: 50,
    },
  },
} as ComponentMeta<typeof Skeleton>;

export const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;
