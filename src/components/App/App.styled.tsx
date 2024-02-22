import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
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
  background-color: #8fcf18;

  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 120px 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  &::before {
    position: absolute;
    top: 170px;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 70px;
  }
`;
