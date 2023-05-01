import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from './Page';

export default {
  title: 'shared/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

export const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>
    <div style={{ width: '200px', height: '200px' }}>Some info</div>
  </Page>
);
