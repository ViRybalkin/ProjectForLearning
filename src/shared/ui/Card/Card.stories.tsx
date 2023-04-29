import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <div style={{ width: '200px', height: '200px' }}>Some info</div>
  </Card>
);
