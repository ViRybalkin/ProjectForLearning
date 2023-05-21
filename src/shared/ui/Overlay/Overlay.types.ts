import React, { ReactNode } from 'react';

export interface OverlayProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent) => void;
  testId?: string;
  classname?: string;
}
