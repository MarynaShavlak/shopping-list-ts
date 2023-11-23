import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form } from 'components/Form';

export const TodoForm = ({ onSubmit, operationType }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'priority':
        setPriority(value);
        break;
      default:
        return console.warn(`Type of field with name ${name} is not found`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = { title, priority };
    const isItemAdded = onSubmit(newItem);

    if (isItemAdded === true) {
      reset();
    }
  };

  const reset = () => {
    setTitle('');
    setPriority('');
  };

  return (
    <Form
      title={title}
      priority={priority}
      operationType={operationType}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  operationType: PropTypes.string.isRequired,
};
