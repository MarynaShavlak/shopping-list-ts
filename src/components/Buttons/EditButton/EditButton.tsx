import React, { FC } from 'react';
import { EditButtonStyled } from './EditButton.styled';
import { AiFillEdit } from 'react-icons/ai';

interface EditButtonProps {
  onClick: () => void;
}

export const EditButton: FC<EditButtonProps> = ({ onClick }) => {
  return (
    <EditButtonStyled type="button" onClick={onClick} aria-label="Edit item">
      <AiFillEdit />
    </EditButtonStyled>
  );
};
