import React, { FC } from 'react';
import { EditButtonStyled } from './EditButton.styled';
import { GrEdit } from 'react-icons/gr';
import { CommonIconBtnProps } from '../Buttons.types';

export const EditButton: FC<CommonIconBtnProps> = ({ onClick }) => {
  return (
    <EditButtonStyled type="button" onClick={onClick} aria-label="Edit item">
      <GrEdit />
    </EditButtonStyled>
  );
};
