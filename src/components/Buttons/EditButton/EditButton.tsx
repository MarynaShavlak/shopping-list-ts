import { FC } from 'react';
import { GrEdit } from 'react-icons/gr';
import { IconButtonProps } from '../IconButton/IconButton.types';
import { IconButton } from '../IconButton';

export const EditButton: FC<Pick<IconButtonProps, 'status' | 'onClick'>> = ({
  onClick,
  status,
}) => {
  return (
    <IconButton onClick={onClick} label="Edit item" status={status}>
      <GrEdit />
    </IconButton>
  );
};
