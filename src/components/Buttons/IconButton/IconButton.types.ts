import { ReactNode } from 'react';

export interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
  label: string;
  status?: boolean;
  rounded?: boolean;
}
