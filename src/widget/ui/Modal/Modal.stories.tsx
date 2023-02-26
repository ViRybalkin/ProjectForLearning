import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'widget/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
    children: {
      control: 'text',
      defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ad animi delectus ex mollitia officiis quaerat, sed.
      Aliquid delectus doloremque, eum facere, facilis fugiat iusto modi,
      mollitia quas ratione recusandae tenetur!`,
    },
  },
} as unknown as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
