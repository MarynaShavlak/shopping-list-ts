import { FC } from 'react';
import { IconButtonStyled } from './IconButton.styled';
import { IconButtonProps } from './IconButton.types';

export const IconButton: FC<IconButtonProps> = ({
  onClick,
  children,
  label,
  rounded,
  status,
}) => {
  return (
    <IconButtonStyled
      type="button"
      aria-label={label}
      onClick={onClick}
      rounded={rounded}
      status={status}
    >
      {children}
    </IconButtonStyled>
  );
};
