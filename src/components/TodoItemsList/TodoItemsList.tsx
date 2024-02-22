import React, { FC } from 'react';
import { List, Item } from './TodoItemsList.styled';
import { TodoItem } from 'components/TodoItem';
import { TodoItemsListProps } from './TodoItemsList.types';

export const TodoItemsList: FC<TodoItemsListProps> = ({
  items,
  ...otherProps
}) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <TodoItem item={item} {...otherProps} />
        </Item>
      ))}
    </List>
  );
};