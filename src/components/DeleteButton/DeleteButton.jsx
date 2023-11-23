import PropTypes from 'prop-types';
import { DeleteButtonStyled } from './DeleteButton.styled';
import { ReactComponent as DeleteIcon } from './delete-icon.svg';

export function DeleteButton({ onClick }) {
  return (
    <DeleteButtonStyled
      type="button"
      onClick={onClick}
      aria-label="Delete item"
    >
      <DeleteIcon />
    </DeleteButtonStyled>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
