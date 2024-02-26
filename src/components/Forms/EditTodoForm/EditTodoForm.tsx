import React, { FC, useState, FormEvent } from 'react';
import { FormStyled } from './EditTodoForm.styled';
import { TextButton } from 'components/Buttons/TextButton';
import { EditTodoFormData, EditTodoFormProps } from './EditTodoForm.types';

export const EditTodoForm: FC<EditTodoFormProps> = ({
  item,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<EditTodoFormData>({
    title: item.title,
    quantity: item.quantity,
    unit: item.unit,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      handleChange(e);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { title, quantity } = formData;
    const trimmedTitle = title.trim();
    const trimmedQuantity = quantity.slice(0, 3);
    const newItem = { title: trimmedTitle, quantity: trimmedQuantity };
    onSave({ ...item, ...newItem });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="edit-todo-form__input edit-input--quantity"
        type="text"
        name="quantity"
        value={formData.quantity}
        onChange={handleQuantityChange}
        required
      />
      <input
        className="edit-todo-form__input edit-input--title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        placeholder="Title..."
      />

      <TextButton label="Save" type="submit" size="little" />
      <TextButton
        label="Cancel"
        onClick={onCancel}
        type="button"
        size="little"
      />
    </FormStyled>
  );
};
