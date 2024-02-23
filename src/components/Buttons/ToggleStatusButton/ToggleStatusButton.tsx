import React, { FC } from 'react';
import { ToggleStatusButtonStyled } from './ToggleStatusButton.styled';
import { FaMinus } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import { CommonIconBtnProps } from '../Buttons.types';

export const ToggleStatusButton: FC<CommonIconBtnProps> = ({
  status,
  onClick,
}) => {
  return (
    <ToggleStatusButtonStyled
      type="button"
      onClick={onClick}
      aria-label="Toggle item status"
      status={status}
    >
      {status ? <IoMdDoneAll /> : <FaMinus />}
    </ToggleStatusButtonStyled>
  );
};
