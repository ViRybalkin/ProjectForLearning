import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from '@/shared/assets/img/storybook.jpg';

import { Avatar } from './Avatar';

export default {
  argTypes: {
    size: {
      defaultValue: false,
      type: 'number',
    },
  },
  component: Avatar,
  title: 'shared/Avatar',
} as ComponentMeta<typeof Avatar>;

const Primary: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Template = Primary.bind({});
Template.args = {
  alt: 'story avatar',
  src: AvatarImg,
};
