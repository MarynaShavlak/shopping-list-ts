import React, { ReactElement } from 'react';
import { SectionStyled } from './Section.styled';

interface SectionProps {
  title?: string;
  children: ReactElement;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <SectionStyled>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </SectionStyled>
  );
};
