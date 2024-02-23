import React, { FC, useState, FormEvent } from 'react';
import { FormStyled } from './AddTodoForm.styled';
import { TextButton } from 'components/Buttons/TextButton';
import { AddTodoFormData, AddTodoFormProps } from './AddTodoForm.types';

export const AddTodoForm: FC<AddTodoFormProps> = ({ onSubmit }) => {
  const initialFormData: AddTodoFormData = {
    title: '',
    quantity: '1',
  };
  const [formData, setFormData] = useState<AddTodoFormData>(initialFormData);

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
    onSubmit(newItem);
    setFormData(initialFormData);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="todo-form__input input--title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        placeholder="Title..."
      />

      <input
        className="todo-form__input input--quantity"
        type="text"
        name="quantity"
        value={formData.quantity}
        onChange={handleQuantityChange}
        required
      />
      <TextButton label="Add" type="submit" />
    </FormStyled>
  );
};
