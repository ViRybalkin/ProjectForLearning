import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ProfileCardDataTypes } from './ProfileCard.types';

const data: ProfileCardDataTypes = {
  age: 22,
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  city: 'Moscow',
  country: 'Russia',
  currency: 'RUB',
  first: 'Имя',
  id: '1',
  lastname: 'Фамилия',
  username: 'Имя профиля',
};

export default {
  argTypes: {
    data: {
      defaultValue: data,
    },
    error: {
      defaultValue: false,
      type: 'boolean',
    },
    isLoading: {
      defaultValue: false,
      type: 'boolean',
    },
    readonly: {
      defaultValue: false,
      type: 'boolean',
    },
  },
  component: ProfileCard,
  title: 'entities/ProfileCard',
} as ComponentMeta<typeof ProfileCard>;

export const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;
