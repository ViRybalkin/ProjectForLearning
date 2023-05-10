import { ReactNode } from 'react';
import { FlexProps } from '../Flex/Flex.types';

export interface HStackProps extends Omit<FlexProps, 'direction' | 'children'> {
  children: ReactNode;
}
