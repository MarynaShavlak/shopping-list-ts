import styled from 'styled-components';

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Title = styled.span`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
