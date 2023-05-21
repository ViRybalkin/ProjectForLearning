import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileComponent } from './MobileComponent';

export default {
  title: 'shared/MobileComponent',
  component: MobileComponent,
} as ComponentMeta<typeof MobileComponent>;

export const Template: ComponentStory<typeof MobileComponent> = (args) => <MobileComponent {...args} />;