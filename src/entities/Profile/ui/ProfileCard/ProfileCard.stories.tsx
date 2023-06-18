import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ProfileCardDataTypes } from './ProfileCard.types';

const data: ProfileCardDataTypes = {
  id: '1',
  country: 'Russia',
  lastname: 'Фамилия',
  age: 22,
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  city: 'Moscow',
  currency: 'RUB',
  first: 'Имя',
  username: 'Имя профиля',
};

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    data: {
      defaultValue: data,
    },
    error: {
      type: 'boolean',
      defaultValue: false,
    },
    isLoading: {
      type: 'boolean',
      defaultValue: false,
    },
    readonly: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof ProfileCard>;

export const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;
