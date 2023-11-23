import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DeleteButton } from 'components/DeleteButton';
import { Priority, Title } from './TodoItem.styled';

export const TodoItem = ({ item, onDeleteItem }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    setTitle(item.title);
  }, [item.title]);

  useEffect(() => {
    setPriority(item.priority);
  }, [item.priority]);

  return (
    <>
      <Priority>{priority}</Priority>
      <Title>{title}</Title>

      <DeleteButton onClick={() => onDeleteItem(item.id)} />
    </>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
