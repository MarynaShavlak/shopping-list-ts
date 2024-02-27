import { FC } from 'react';
import { FaMinus } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import { CommonIconBtnProps } from '../Buttons.types';
import { IconButton } from '../IconButton';

export const ToggleStatusButton: FC<CommonIconBtnProps> = ({
  onClick,
  status,
}) => {
  return (
    <IconButton
      onClick={onClick}
      status={status}
      label="Delete item"
      rounded={true}
    >
      {status ? <IoMdDoneAll /> : <FaMinus />}
    </IconButton>
  );
};
