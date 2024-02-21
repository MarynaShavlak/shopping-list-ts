import styled from 'styled-components';
import backImg from './main-back.png';

export const LayoutStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding-left: 124px;
  padding-top: 58px;
  padding-bottom: 57px;
  max-width: 1366px;
  margin: 0 auto;
  background-image: url(${backImg});
  background-size: 732px auto;
  background-position: right top;
  background-repeat: no-repeat;
`;
