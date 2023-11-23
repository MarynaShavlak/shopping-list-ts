import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DeleteButton } from 'components/DeleteButton';
import { Priority, Title } from './TodoItem.styled';

export const TodoItem = ({ item: { id, title, priority }, onDeleteItem }) => {
  const [itemTitle, setItemTitle] = useState('');
  const [itemPriority, setItemPriority] = useState('');

  useEffect(() => {
    setItemTitle(title);
    setItemPriority(priority);
  }, [title, priority]);

  return (
    <>
      <Priority>{itemPriority}</Priority>
      <Title>{itemTitle}</Title>
      <DeleteButton onClick={() => onDeleteItem(id)} />
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
