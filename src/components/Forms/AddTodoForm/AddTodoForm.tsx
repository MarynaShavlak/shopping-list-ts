import React, {
  FC,
  useState,
  useEffect,
  useRef,
  FormEvent,
  ChangeEvent,
  MouseEvent,
} from 'react';
import { FormStyled } from './AddTodoForm.styled';
import { TextButton } from 'components/Buttons/TextButton';
import { Unit } from 'components/App/App.types';
import { AddTodoFormData, AddTodoFormProps } from './AddTodoForm.types';
import { UnitDropDown } from 'components/UnitDropDown';

const initialFormData: AddTodoFormData = {
  title: '',
  quantity: '1',
  unit: 'pcs',
};

const allowedUnits: Unit[] = ['pcs', 'kg', 'g', 'litre'];

export const AddTodoForm: FC<AddTodoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<AddTodoFormData>(initialFormData);
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      handleInputChange(e);
    }
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
    onSubmit(newItem);
    setFormData(initialFormData);
  };

  const handleToggleDropDown = () => {
    setIsDropDownOpen(prevState => !prevState);
  };

  const handleInputChangeUnits = (unit: Unit, e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setFormData(prevData => ({ ...prevData, unit: unit }));
    handleToggleDropDown();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="todo-form__input input--title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
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

      <UnitDropDown
        unit={formData.unit}
        isOpen={isDropDownOpen}
        toggleDropDown={handleToggleDropDown}
        handleInputChangeUnits={handleInputChangeUnits}
        allowedUnits={allowedUnits}
        refToggleDropdown={refToggleDropdown}
      />
      <TextButton label="Add" type="submit" />
    </FormStyled>
  );
};
