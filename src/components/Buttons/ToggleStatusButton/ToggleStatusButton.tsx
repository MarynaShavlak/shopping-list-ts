import React, { FC } from 'react';
import { ToggleStatusButtonStyled } from './ToggleStatusButton.styled';
import { FaMinus } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import { ToggleStatusButtonProps } from './ToggleStatusButton.types';

export const ToggleStatusButton: FC<ToggleStatusButtonProps> = ({
  status,
  onClick,
}) => {
  return (
    <ToggleStatusButtonStyled
      type="button"
      onClick={onClick}
      aria-label="Toggle item status"
    >
      {status ? <IoMdDoneAll /> : <FaMinus />}
    </ToggleStatusButtonStyled>
  );
};
