import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ViewSelector } from './ViewSelector';

export default {
  argTypes: {
    articles: {
      defaultValue: ViewSelector,
    },
    view: {
      defaultValue: 'SMALL',
    },
  },
  component: ViewSelector,
  title: 'features/ViewSelector',
} as ComponentMeta<typeof ViewSelector>;

export const Template: ComponentStory<typeof ViewSelector> = (args) => <ViewSelector {...args} />;
