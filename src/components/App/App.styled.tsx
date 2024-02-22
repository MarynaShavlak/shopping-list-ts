import styled from 'styled-components';
import back from './back.png';

export const Container = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 280px;
  min-height: 653px;
  padding-left: 23px;
  padding-right: 30px;
  padding-top: 19px;
  padding-bottom: 19px;
  border-radius: 30px;
  /* background-color: #ffb08f; */
  background-color: #8fcf18;
  /* background-image: url(${back}),
    linear-gradient(
      112deg,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 255, 255, 0.1) 73.15%
    );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 120px 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;
