import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomLink } from './CustomLink';

export default {
  argTypes: {
    name: {
      control: { type: 'text' },
      defaultValue: 'О нас',
    },
    to: {
      control: { type: 'text' },
      defaultValue: '/about',
    },
  },
  component: CustomLink,
  title: 'shared/CustomLink',
} as ComponentMeta<typeof CustomLink>;

export const Template: ComponentStory<typeof CustomLink> = (args) => <CustomLink {...args} />;
