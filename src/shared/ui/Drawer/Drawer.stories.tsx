import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer } from './Drawer';

export default {
  component: Drawer,
  title: 'shared/Drawer',
} as ComponentMeta<typeof Drawer>;

export const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;