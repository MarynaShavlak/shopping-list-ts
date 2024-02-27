import { FC } from 'react';
import { IconButton } from '../IconButton';
import { IconButtonProps } from '../IconButton/IconButton.types';
import { IoClose } from 'react-icons/io5';

export const DeleteButton: FC<Pick<IconButtonProps, 'status' | 'onClick'>> = ({
  onClick,
  status,
}) => {
  return (
    <IconButton onClick={onClick} status={status} label="Delete item">
      <IoClose />
    </IconButton>
  );
};
