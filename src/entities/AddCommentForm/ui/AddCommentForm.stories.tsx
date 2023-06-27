import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddCommentForm } from './AddCommentForm';

export default {
  component: AddCommentForm,
  title: 'entities/AddCommentForm',
} as ComponentMeta<typeof AddCommentForm>;

export const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;
