import { FC } from 'react';
import { GrEdit } from 'react-icons/gr';
import { CommonIconBtnProps } from '../Buttons.types';
import { IconButton } from '../IconButton';

export const EditButton: FC<CommonIconBtnProps> = ({ onClick, status }) => {
  return (
    <IconButton onClick={onClick} label="Edit item" status={status}>
      <GrEdit />
    </IconButton>
  );
};
