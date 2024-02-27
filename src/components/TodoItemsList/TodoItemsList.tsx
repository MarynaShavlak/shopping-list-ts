import React, { FC } from 'react';
import { List, Item } from './TodoItemsList.styled';
import { TodoItem } from 'components/TodoItem';
import { TodoItemsListProps } from './TodoItemsList.types';

export const TodoItemsList: FC<TodoItemsListProps> = ({
  items,
  ...otherProps
}) => {
  const renderList = items.map(item => (
    <Item key={item.id} status={item.status}>
      <TodoItem item={item} {...otherProps} />
    </Item>
  ));

  return <List>{renderList}</List>;
};
