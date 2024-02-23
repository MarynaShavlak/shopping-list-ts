import React, { FC } from 'react';
import { DeleteButtonStyled } from './DeleteButton.styled';
import { IoClose } from 'react-icons/io5';
import { CommonIconBtnProps } from '../Buttons.types';

export const DeleteButton: FC<CommonIconBtnProps> = ({ onClick, status }) => {
  return (
    <DeleteButtonStyled
      type="button"
      onClick={onClick}
      aria-label="Delete item"
      status={status}
    >
      <IoClose />
    </DeleteButtonStyled>
  );
};
