import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBar } from './SideBar';

export default {
  title: 'widget/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;
