import styled from 'styled-components';

export const LayoutStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 738px;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
