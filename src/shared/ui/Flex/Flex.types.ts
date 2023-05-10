import { ReactNode } from 'react';

type AlignProp = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type DirectionProp = 'row' | 'rowReverse' | 'column' | 'columnReverse';
type JustifyProp = 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
type GapProp = '2' | '4' | '8' | '10' | '12 ' | '14' | '16' | '18' | '20';

export interface FlexProps {
  children: ReactNode;
  classname?: string;
  justify?: JustifyProp;
  align?: AlignProp;
  direction?: DirectionProp;
  fullWidth?: boolean;
  gap?: GapProp;
}
