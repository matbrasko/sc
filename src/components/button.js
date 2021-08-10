import React from 'react';

const Button = ({ children, onButtonClick, nameClass }) => {
  return (
    <div
      className={nameClass ? nameClass : null}
      role='button'
      onClick={onButtonClick}
      onKeyDown={onButtonClick}
      tabIndex={0}
      aria-label='switch the carousel'
    >
      {children}
    </div>
  );
};
export default Button;
