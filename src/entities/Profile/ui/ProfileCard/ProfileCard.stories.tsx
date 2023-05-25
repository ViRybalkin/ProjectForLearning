import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from '@/shared/assets/img/storybook.jpg';
import { ProfileCard } from './ProfileCard';
import { ProfileCardDataTypes } from './ProfileCard.types';

const data: ProfileCardDataTypes = {
  id: '1',
  country: 'Russia',
  lastname: 'Фамилия',
  age: 22,
  avatar: AvatarImg,
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
