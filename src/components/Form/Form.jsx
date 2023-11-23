import PropTypes from 'prop-types';
import { FormStyled } from './Form.styled';
import { OperationButton } from 'components/OperationButton';

export function Form({ title, priority, operationType, onSubmit, onChange }) {
  return (
    <FormStyled onSubmit={onSubmit}>
      <input
        className="todo-form__input input--title"
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        required
        placeholder="Title..."
      />

      <input
        className="todo-form__input input--priority"
        type="text"
        name="priority"
        value={priority}
        onChange={onChange}
        required
      />

      <OperationButton>{operationType}</OperationButton>
    </FormStyled>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  operationType: PropTypes.string.isRequired,
};
