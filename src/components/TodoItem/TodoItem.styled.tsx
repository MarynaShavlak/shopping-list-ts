import styled from 'styled-components';
import { InputProps } from './TodoItem.types';

export const Quantity = styled.span<InputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  color: ${(props: InputProps) => (props.status === true ? '#fff' : '#000')};
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props: InputProps) =>
    props.status === true ? 'transparent' : '#fff'};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const UnitEl = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  background-color: #8fcf18;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Title = styled.span<InputProps>`
  color: ${(props: InputProps) => (props.status === true ? '#fff' : '#000')};
  font-size: 14px;
  font-weight: 400;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
