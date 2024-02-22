import styled from 'styled-components';

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
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: transparent;
    border: 1px solid #8fcf18;
    svg {
      fill: #8fcf18;
    }
  }
  svg {
    fill: #00000088;
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
  }
`;
