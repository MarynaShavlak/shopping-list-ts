import React, { ReactElement } from 'react';
import { LayoutStyled } from './Layout.styled';

interface LayoutProps {
  children: ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};
