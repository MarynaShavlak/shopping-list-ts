import React, { FC, useState } from 'react';
import { DeleteButton } from 'components/Buttons/DeleteButton';
import { EditButton } from 'components/Buttons/EditButton';
import { ToggleStatusButton } from 'components/Buttons/ToggleStatusButton';
import { Quantity, Title, UnitEl } from './TodoItem.styled';
import { EditTodoForm } from 'components/Forms/EditTodoForm';
import { ItemProps } from 'components/App/App.types';
import { TodoItemProps } from './TodoItem.types';

export const TodoItem: FC<TodoItemProps> = ({
  item,
  onDeleteItem,
  onToggleStatus,
  onUpdateItem,
}) => {
  const { id, title, quantity, status, unit } = item;
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
          <ToggleStatusButton
            onClick={() => onToggleStatus(id)}
            status={status}
          />
          <Quantity>{quantity}</Quantity>
          <UnitEl>{unit}</UnitEl>
          <Title>{title}</Title>

          {!status && <EditButton onClick={handleEdit} status={status} />}
          <DeleteButton onClick={() => onDeleteItem(id)} status={status} />
        </>
      )}
    </>
  );
};
