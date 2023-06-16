import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  component: Card,
  title: 'shared/Card',
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <div style={{ height: '200px', width: '200px' }}>Some info</div>
  </Card>
);
