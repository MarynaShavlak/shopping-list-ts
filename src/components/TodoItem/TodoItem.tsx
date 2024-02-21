import React, { FC } from 'react';
import { DeleteButton } from 'components/DeleteButton';
import { Priority, Title } from './TodoItem.styled';

interface TodoItemProps {
  item: { id: string; title: string; priority: string };
  onDeleteItem: (itemId: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ item, onDeleteItem }) => {
  const { id, title, priority } = item;
  return (
    <>
      <Priority>{priority}</Priority>
      <Title>{title}</Title>
      <DeleteButton onClick={() => onDeleteItem(id)} />
    </>
  );
};
