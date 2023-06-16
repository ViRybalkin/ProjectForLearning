import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBar } from './SideBar';

export default {
  component: SideBar,
  title: 'widget/SideBar',
} as ComponentMeta<typeof SideBar>;

export const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;
