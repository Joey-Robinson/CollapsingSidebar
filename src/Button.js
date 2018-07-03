import React from 'react';

const Button = (props) => (
  <button
    id="roundButton"
    onMouseUp={props.handleMouseDown}>
    {props.children}
  </button>
);

export default Button;