import React, {
  FC,
  useState,
  useEffect,
  useRef,
  FormEvent,
  MouseEvent,
} from 'react';
import { FormStyled } from './EditTodoForm.styled';
import { TextButton } from 'components/Buttons/TextButton';
import { EditTodoFormData, EditTodoFormProps } from './EditTodoForm.types';
import { Unit } from 'components/App/App.types';
import { UnitDropDown } from 'components/UnitDropDown';

const allowedUnits: Unit[] = ['pcs', 'kg', 'g', 'litre'];

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
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const refToggleDropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        isDropDownOpen &&
        refToggleDropdown.current &&
        !refToggleDropdown.current.contains(e.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isDropDownOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      handleInputChange(e);
    }
  };

  const handleToggleDropDown = () => {
    setIsDropDownOpen(prevState => !prevState);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { title, quantity, unit } = formData;
    const trimmedTitle = title.trim();
    const trimmedQuantity = quantity.slice(0, 3);
    const newItem = {
      title: trimmedTitle,
      quantity: trimmedQuantity,
      unit: unit,
    };
    onSave({ ...item, ...newItem });
  };

  const handleInputChangeUnits = (unit: Unit, e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setFormData(prevData => ({ ...prevData, unit: unit }));
    handleToggleDropDown();
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
      <UnitDropDown
        unit={formData.unit}
        isOpen={isDropDownOpen}
        toggleDropDown={handleToggleDropDown}
        handleInputChangeUnits={handleInputChangeUnits}
        allowedUnits={allowedUnits}
        refToggleDropdown={refToggleDropdown}
      />
      <input
        className="edit-todo-form__input edit-input--title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
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
