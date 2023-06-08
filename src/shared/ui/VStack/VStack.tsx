import { memo } from 'react';
import { Flex } from '../Flex';
import { VStackProps } from './VStack.types';

export const VStack = memo(({ children, ...otherProps }: VStackProps) => {
  return (
    <Flex direction='column' {...otherProps}>
      {children}
    </Flex>
  );
});
