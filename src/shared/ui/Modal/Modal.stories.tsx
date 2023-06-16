import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

export default {
  argTypes: {
    children: {
      control: 'text',
      defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ad animi delectus ex mollitia officiis quaerat, sed.
      Aliquid delectus doloremque, eum facere, facilis fugiat iusto modi,
      mollitia quas ratione recusandae tenetur!`,
    },
    isOpen: {
      control: 'boolean',
      defaultValue: true,
    },
  },
  component: Modal,
  title: 'widget/Modal',
} as unknown as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
