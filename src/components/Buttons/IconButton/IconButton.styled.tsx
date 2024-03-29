import styled from 'styled-components';
import { IconButtonProps } from './IconButton.types';

export const IconButtonStyled = styled.button<IconButtonProps>`
  display: flex;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ rounded }: IconButtonProps) =>
    rounded === true ? '#8fcf18' : 'transparent'};
  border: none;
  border-radius: ${({ rounded }: IconButtonProps) =>
    rounded === true ? '50%' : '3px'};
  cursor: pointer;
  svg {
    fill: ${({ status }: IconButtonProps) =>
      status === true ? '#fff' : '#000'};
    stroke: ${({ status }: IconButtonProps) =>
      status === true ? '#fff' : '#000'};
    transition: fill 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  transition: background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: ${({ status }: IconButtonProps) =>
      status === true ? 'transparent' : '#8fcf18'};

    svg {
      fill: ${({ status }: IconButtonProps) =>
        status === true ? '#000' : '#fff'};
      stroke: ${({ status }: IconButtonProps) =>
        status === true ? '#000' : '#fff'};
    }
  }

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
  }
`;
