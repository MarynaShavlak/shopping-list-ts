import React, { FC } from 'react';
import { SectionStyled } from './Section.styled';
import { SectionProps } from './Section.types';

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </SectionStyled>
  );
};
