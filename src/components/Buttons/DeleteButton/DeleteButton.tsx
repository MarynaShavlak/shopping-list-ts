import { FC } from 'react';
import { CommonIconBtnProps } from '../Buttons.types';
import { IconButton } from '../IconButton';
import { IoClose } from 'react-icons/io5';

export const DeleteButton: FC<CommonIconBtnProps> = ({ onClick, status }) => {
  return (
    <IconButton onClick={onClick} status={status} label="Delete item">
      <IoClose />
    </IconButton>
  );
};
