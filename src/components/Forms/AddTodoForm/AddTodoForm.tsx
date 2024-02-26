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
import { DropDown } from 'components/DropDown';

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
    const handleClickOutside: Parameters<
      Document['addEventListener']
    >[1] = e => {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      handleChange(e);
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

  const handleChangeUnits = (unit: Unit, e: MouseEvent<HTMLLIElement>) => {
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
      <div
        className="todo-form__units"
        onClick={handleToggleDropDown}
        ref={refToggleDropdown}
      >
        <span>{formData.unit}</span>
        <DropDown isOpen={isDropDownOpen} className="drop-down-el">
          <ul className="units-list">
            {allowedUnits.map(unit => (
              <li
                key={unit}
                className="units-list__item"
                onClick={e => handleChangeUnits(unit, e)}
              >
                {unit}
              </li>
            ))}
          </ul>
        </DropDown>
      </div>

      <TextButton label="Add" type="submit" />
    </FormStyled>
  );
};
