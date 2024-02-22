import React, { FC } from 'react';
import { Button } from './TextButton.styled';

interface TextButtonProps {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  size?: 'big' | 'little';
}

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
