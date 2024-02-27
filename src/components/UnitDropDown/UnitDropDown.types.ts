import React, { MouseEvent } from 'react';
import { Unit } from 'components/App/App.types';

export interface UnitDropDownProps {
  unit: Unit;
  isOpen: boolean;
  toggleDropDown: () => void;
  handleInputChangeUnits: (unit: Unit, e: MouseEvent<HTMLLIElement>) => void;
  allowedUnits: Unit[];
  refToggleDropdown: React.RefObject<HTMLDivElement>;
}
