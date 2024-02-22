import React, { FC } from 'react';
import { List, Item } from './TodoItemsList.styled';
import { TodoItem } from 'components/TodoItem';
import { ItemProps } from 'components/App/App';

interface TodoItemsListProps {
  items: ItemProps[];
  onDeleteItem: (itemId: string) => void;
  onUpdateItem: (editedItem: ItemProps) => void;
  onToggleStatus: (itemId: string) => void;
}

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
