import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyled } from './TodoForm.styled';
import { AddButton } from 'components/AddButton';

export const TodoForm = ({ onSubmit }) => {
  const initialFormData = {
    title: '',
    priority: '14',
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlePriorityChange = e => {
    const inputValue = e.target.value;
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      handleChange(e);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, priority } = formData;
    const trimmedTitle = title.trim();
    const trimmedPriority = priority.slice(0, 3);
    const newItem = { title: trimmedTitle, priority: trimmedPriority };
    onSubmit(newItem);
    setFormData(initialFormData);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="todo-form__input input--title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        placeholder="Title..."
      />

      <input
        className="todo-form__input input--priority"
        type="text"
        name="priority"
        value={formData.priority}
        onChange={handlePriorityChange}
        required
      />
      <AddButton />
    </FormStyled>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
