import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 14px;
  }
  .edit-todo-form__input {
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
    border: none;
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

  .edit-input--title {
    padding-left: 10px;
    width: calc(100% - 122px);
    @media screen and (min-width: 768px) {
      width: calc(100% - 50px - 134px);
    }
  }

  .edit-input--priority {
    width: 30px;
    text-align: center;
    @media screen and (min-width: 768px) {
      width: 50px;
    }
  }
`;
