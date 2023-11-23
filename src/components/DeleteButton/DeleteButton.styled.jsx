import styled from 'styled-components';

export const DeleteButtonStyled = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #ffd700;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 250ms background-color ease-in, 250ms color ease-in;
  &:hover {
    background-color: #ffd700;
    svg {
      fill: #000000;
    }
  }
  svg {
    fill: #ffd700;
  }
`;
