import React, { FC } from 'react';
import { Button } from './TextButton.styled';
import { TextButtonProps } from './TextButton.types';

export const TextButton: FC<TextButtonProps> = ({
  label,
  onClick,
  type,
  size,
}) => {
  return (
    <Button type={type} aria-label="Add new item" onClick={onClick} size={size}>
      {label}
    </Button>
  );
};
