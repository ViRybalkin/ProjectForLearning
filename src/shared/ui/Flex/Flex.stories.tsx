import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

export const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
    <div>Flex</div>
  </Flex>
);
