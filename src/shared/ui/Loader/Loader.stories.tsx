import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from './Loader';

export default {
  component: Loader,
  title: 'shared/Loader',
} as ComponentMeta<typeof Loader>;

export const Template: ComponentStory<typeof Loader> = () => <Loader />;
