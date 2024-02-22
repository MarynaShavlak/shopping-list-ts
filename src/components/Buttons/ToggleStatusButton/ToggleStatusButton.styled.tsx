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
  background-color: #e4f4a3;
  color: #e4f4a3;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: 250ms background-color ease-in, 250ms color ease-in;
  &:hover {
    background-color: transparent;
    border: 1px solid #e4f4a3;
    svg {
      fill: #e4f4a3;
    }
  }
  svg {
    fill: #00000088;
  }
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
  }
`;
