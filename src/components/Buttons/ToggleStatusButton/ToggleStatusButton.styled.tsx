import styled from 'styled-components';

export const ToggleStatusButtonStyled = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background-color: #ffd700;
  color: #ffd700;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: 250ms background-color ease-in, 250ms color ease-in;
  &:hover {
    background-color: transparent;
    border: 1px solid #ffd700;
    svg {
      fill: #ffd700;
    }
  }
  svg {
    fill: #ffd700;
    fill: #000000;
  }
`;
