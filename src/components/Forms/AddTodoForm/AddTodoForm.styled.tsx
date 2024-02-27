import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  gap: 14px;
  .todo-form__input {
    height: 35px;
    background: rgba(255, 255, 255, 0.6);
    color: rgba(33, 33, 33, 1);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.22;
    letter-spacing: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;
    outline: none;

    border-radius: 3px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
    &:focus {
      outline: none;
      border: 2px solid #e4f4a3;
    }
  }

  .input--title {
    padding-left: 10px;

    @media screen and (max-width: 767px) {
      width: calc(100% - 28px - 60px - 34px);
    }
    @media screen and (min-width: 768px) {
      flex-grow: 1;
    }
  }

  .input--quantity {
    width: 34px;
    text-align: center;
    @media screen and (min-width: 768px) {
      width: 64px;
    }
  }

  /* .todo-form__units {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    background: rgba(255, 255, 255, 0.6);
    color: rgba(33, 33, 33, 1);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 10px;
    line-height: 1.22;
    letter-spacing: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    cursor: pointer;

    border-radius: 3px;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    &:focus {
      outline: none;
      border: 2px solid #e4f4a3;
    }

    span {
      text-align: center;
      width: 35px;
    }
  }

  .drop-down-el {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    z-index: 4;
  }

  .units-list {
    content: '';
    max-height: fit-content;
    width: 45px;
    background-color: #e4f4a3;
    border-radius: 4px;
    z-index: 4;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }

  .units-list__item {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
    }
    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  .drop-down-el {
    &.enter {
      opacity: 0;
    }
    &.enter-active {
      opacity: 1;
      transition: opacity 300ms;
    }
    &.exit {
      opacity: 1;
    }
    &.exit-active {
      opacity: 0;
      transition: opacity 300ms;
    }
  } */
`;
