import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  gap: 14px;
  .todo-form__input {
    height: 35px;
    background: rgba(255, 255, 255, 0.6);
    color: rgba(33, 33, 33, 0.7);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 18.22px;
    line-height: 1.22;
    letter-spacing: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    border-radius: 3px;
    &:focus {
      outline: none;
      border: 2px solid #ffd700;
    }
  }

  .input--title {
    padding-left: 10px;
    width: 192px;
  }

  .input--priority {
    width: 64px;
    text-align: center;
  }
`;
