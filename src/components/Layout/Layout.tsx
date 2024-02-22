import { FC } from 'react';
import { LayoutStyled } from './Layout.styled';
import { LayoutProps } from './Layout.types';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};
