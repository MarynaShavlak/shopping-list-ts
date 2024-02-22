import styled from 'styled-components';

interface ButtonProps {
  size?: 'big' | 'little';
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #e4f4a3;
  border: 2px solid #e4f4a3;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0;
  padding-top: 4px;
  padding-bottom: 4px;
  transition: 250ms background-color ease-in, 250ms color ease-in;

  width: ${(props: ButtonProps) => (props.size === 'little' ? '55px' : '60px')};
  font-size: ${(props: ButtonProps) =>
    props.size === 'little' ? '10px' : '16px'};
  border: ${(props: ButtonProps) =>
    props.size === 'little' ? '1px solid #e4f4a3' : '2px solid #e4f4a3'};

  &:hover {
    background-color: #e4f4a3;
    color: #000000;
  }

  @media screen and (min-width: 768px) {
    width: ${(props: ButtonProps) =>
      props.size === 'little' ? '80px' : '100px'};
    font-size: ${(props: ButtonProps) =>
      props.size === 'little' ? '14px' : '20px'};
  }
`;
