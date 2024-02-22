import styled from 'styled-components';
import back from './back.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 653px;
  padding-left: 23px;
  padding-right: 30px;
  padding-top: 19px;
  padding-bottom: 19px;
  border-radius: 30px;
  background-image: url(${back}),
    linear-gradient(
      112deg,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 255, 255, 0.1) 73.15%
    );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
`;
