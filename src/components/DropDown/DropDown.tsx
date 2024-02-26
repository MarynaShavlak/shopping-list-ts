import React, { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { DropDownEl } from './DropDown.styled';
import { DropDownProps } from './DropDown.types';

export const DropDown: FC<DropDownProps> = ({
  className,
  isOpen,
  children,
}) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      className={className}
      in={isOpen}
      timeout={300}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div className="dropdown-wrapper">
        <div className={`DropDown`}>{children}</div>
      </div>
    </CSSTransition>
  );
};
