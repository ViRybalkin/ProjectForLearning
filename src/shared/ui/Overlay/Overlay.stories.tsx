import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Overlay } from './Overlay';

export default {
  title: 'shared/Overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

export const Template: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div>Content</div>
  </Overlay>
);
