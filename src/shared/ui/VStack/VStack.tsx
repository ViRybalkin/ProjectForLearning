import { memo } from 'react';
import { Flex } from '../Flex';
import { VStackProps } from './VStack.types';

export const VStack = memo(({ children, dataTestid, ...otherProps }: VStackProps) => {
  return (
    <Flex
      dataTestid={dataTestid}
      direction='column'
      {...otherProps}>
      {children}
    </Flex>
  );
});
