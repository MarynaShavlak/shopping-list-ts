import React, { FC, useRef } from 'react';
import { DropDownEl } from './UnitDropDown.styled';
import { CSSTransition } from 'react-transition-group';
import { UnitDropDownProps } from './UnitDropDown.types';

export const UnitDropDown: FC<UnitDropDownProps> = ({
  unit,
  isOpen,
  toggleDropDown,
  handleInputChangeUnits,
  allowedUnits,
  refToggleDropdown,
}) => {
  const renderUnits = allowedUnits.map(unit => (
    <li
      key={unit}
      className="units-list__item"
      onClick={e => handleInputChangeUnits(unit, e)}
    >
      {unit}
    </li>
  ));
  const nodeRef = useRef(null);
  return (
    <DropDownEl onClick={toggleDropDown} ref={refToggleDropdown}>
      <span>{unit}</span>
      <CSSTransition
        className="drop-down-el"
        in={isOpen}
        timeout={300}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div className="dropdown-wrapper">
          <div className={`DropDown`}>
            <ul className="units-list">{renderUnits}</ul>
          </div>
        </div>
      </CSSTransition>
    </DropDownEl>
  );
};
