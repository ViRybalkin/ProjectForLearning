import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from './Page';

export default {
  component: Page,
  title: 'shared/Page',
} as ComponentMeta<typeof Page>;

export const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>
    <div style={{ height: '200px', width: '200px' }}>Some info</div>
  </Page>
);
