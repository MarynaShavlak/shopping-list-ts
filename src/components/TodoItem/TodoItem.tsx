import React, { FC, useState } from 'react';
import { DeleteButton } from 'components/Buttons/DeleteButton';
import { EditButton } from 'components/Buttons/EditButton';
import { ToggleStatusButton } from 'components/Buttons/ToggleStatusButton';
import { Priority, Title } from './TodoItem.styled';
import { EditTodoForm } from 'components/Forms/EditTodoForm';
import { ItemProps } from 'components/App/App';

interface TodoItemProps {
  item: ItemProps;
  onDeleteItem: (itemId: string) => void;
  onUpdateItem: (updatedItem: ItemProps) => void;
  onToggleStatus: (itemId: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  item,
  onDeleteItem,
  onToggleStatus,
  onUpdateItem,
}) => {
  const { id, title, priority, status } = item;
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedItem: ItemProps) => {
    onUpdateItem(updatedItem);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditTodoForm
          item={item}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <Priority>{priority}</Priority>
          <Title>{title}</Title>
          <ToggleStatusButton
            onClick={() => onToggleStatus(id)}
            status={status}
          />
          <EditButton onClick={handleEdit} />
          <DeleteButton onClick={() => onDeleteItem(id)} />
        </>
      )}
    </>
  );
};
