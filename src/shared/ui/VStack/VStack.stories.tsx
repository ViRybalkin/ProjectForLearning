import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VStack } from './VStack';

export default {
  title: 'shared/VStack',
  component: VStack,
} as ComponentMeta<typeof VStack>;

export const Template: ComponentStory<typeof VStack> = (args) => (
  <VStack {...args}>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
  </VStack>
);
