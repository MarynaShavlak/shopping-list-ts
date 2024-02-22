import styled from 'styled-components';

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
  padding-bottom: 6px;
  align-items: center;
  border-bottom: 1px solid #ffd700;
  @media screen and (min-width: 768px) {
    padding-left: 21px;
    column-gap: 15px;
  }
`;
