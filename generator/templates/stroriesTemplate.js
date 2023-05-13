module.exports = (layer, component) => {
  return `import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ${component} } from './${component}';

export default {
  title: '${layer}/${component}',
  component: ${component},
} as ComponentMeta<typeof ${component}>;

export const Template: ComponentStory<typeof ${component}> = (args) => <${component} {...args} />;`;
};
