import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  min-width: 101px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #ffd700;
  border: 2px solid #ffd700;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0;
  padding-top: 4px;
  padding-bottom: 3px;
  transition: 250ms background-color ease-in, 250ms color ease-in;
  &:hover {
    background-color: #ffd700;
    color: #000000;
  }
`;
