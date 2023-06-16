import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DesktopComponent } from './DesktopComponent';

export default {
  component: DesktopComponent,
  title: 'shared/DesktopComponent',
} as ComponentMeta<typeof DesktopComponent>;

export const Template: ComponentStory<typeof DesktopComponent> = (args) => <DesktopComponent {...args} />;