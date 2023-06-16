import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HStack } from './HStack';

export default {
  component: HStack,
  title: 'shared/HStack',
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
