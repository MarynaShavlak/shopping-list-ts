import styled from 'styled-components';

export const SectionStyled = styled.section`
  /* z-index: 1; */
  .section__title {
    margin: 0 0 36px 0;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.22;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 768px) {
      font-size: 45px;
    }
  }
`;
