import { ReactNode } from 'react';
import { FlexProps } from '../Flex/Flex.types';

export interface VStackProps extends Omit<FlexProps, 'direction' | 'children'> {
  children: ReactNode;
  dataTestid?: string;
}
