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
    priority: item.priority,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      handleChange(e);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { title, priority } = formData;
    const trimmedTitle = title.trim();
    const trimmedPriority = priority.slice(0, 3);
    const newItem = { title: trimmedTitle, priority: trimmedPriority };
    onSave({ ...item, ...newItem });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="edit-todo-form__input edit-input--priority"
        type="text"
        name="priority"
        value={formData.priority}
        onChange={handlePriorityChange}
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
