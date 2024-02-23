import styled from 'styled-components';
import { ListElProps } from './TodoItemsList.types';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
  margin-top: 49px;
`;

export const Item = styled.li`
  margin: 0;
  display: flex;
  column-gap: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
  border-bottom: 1px solid #e4f4a3;
  border-radius: 5px;
  background-color: ${(props: ListElProps) =>
    props.status === true ? '#8fcf18' : 'transparent'};
  @media screen and (min-width: 768px) {
    padding-left: 10px;
    column-gap: 15px;
  }
`;
