import styled from 'styled-components';
import { CommonIconBtnProps } from '../Buttons.types';

export const ToggleStatusButtonStyled = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background-color: #8fcf18;
  color: #8fcf18;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  svg {
    fill: #000;
    transition: fill 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  transition: background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: ${(props: CommonIconBtnProps) =>
      props.status === true ? 'transparent' : '#8fcf18'};

    svg {
      fill: ${(props: CommonIconBtnProps) =>
        props.status === true ? '#fff' : '#000'};
    }
  }
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
  }
`;
