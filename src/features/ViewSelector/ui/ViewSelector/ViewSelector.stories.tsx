import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ViewSelector } from './ViewSelector';

export default {
  title: 'features/ViewSelector',
  component: ViewSelector,
  argTypes: {
    articles: {
      defaultValue: ViewSelector,
    },
    view: {
      defaultValue: 'SMALL',
    },
  },
} as ComponentMeta<typeof ViewSelector>;

export const Template: ComponentStory<typeof ViewSelector> = (args) => <ViewSelector {...args} />;
