import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HStack } from './HStack';

export default {
  title: 'shared/HStack',
  component: HStack,
} as ComponentMeta<typeof HStack>;

export const Template: ComponentStory<typeof HStack> = (args) => (
  <HStack {...args}>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
  </HStack>
);
