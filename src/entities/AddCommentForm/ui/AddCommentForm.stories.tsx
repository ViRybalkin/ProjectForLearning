import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddCommentForm } from './AddCommentForm';

export default {
  title: 'entities/AddCommentForm',
  component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

export const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;