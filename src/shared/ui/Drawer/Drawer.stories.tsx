import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer } from './Drawer';

export default {
  title: 'shared/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

export const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;