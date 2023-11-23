import PropTypes from 'prop-types';
import React from 'react';
import { List, Item } from './TodoItemsList.styled';
import { TodoItem } from 'components/TodoItem';

export function TodoItemsList({ items, ...otherProps }) {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <TodoItem item={item} {...otherProps} />
        </Item>
      ))}
    </List>
  );
}

TodoItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
