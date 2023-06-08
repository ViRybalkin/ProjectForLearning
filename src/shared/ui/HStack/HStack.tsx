import { memo } from 'react';
import { Flex } from '../Flex';
import { HStackProps } from './HStack.types';

export const HStack = memo(({ children, ...otherProps }: HStackProps) => {
  return (
    <Flex direction='row' {...otherProps}>
      {children}
    </Flex>
  );
});
