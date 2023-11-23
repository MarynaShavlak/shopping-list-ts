import PropTypes from 'prop-types';
import React from 'react';
import { List, Item } from './ItemsList.styled';
import { TodoItem } from 'components/TodoItem';

export function ItemsList({ items, ...otherProps }) {
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

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
