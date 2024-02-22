import React, { FC } from 'react';
import { DeleteButtonStyled } from './DeleteButton.styled';
import { IoClose } from 'react-icons/io5';
import { DeleteButtonProps } from './DeleteButton.types';

export const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <DeleteButtonStyled
      type="button"
      onClick={onClick}
      aria-label="Delete item"
    >
      <IoClose />
    </DeleteButtonStyled>
  );
};
