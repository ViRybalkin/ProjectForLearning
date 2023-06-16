import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileComponent } from './MobileComponent';

export default {
  component: MobileComponent,
  title: 'shared/MobileComponent',
} as ComponentMeta<typeof MobileComponent>;

export const Template: ComponentStory<typeof MobileComponent> = (args) => <MobileComponent {...args} />;