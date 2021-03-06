import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = (props) => (
  <button className="Toggle-Button" onClick={props.click}>
    <div className="Toggle-Button-Line"></div>
    <div className="Toggle-Button-Line"></div>
    <div className="Toggle-Button-Line"></div>
  </button>
);

export default DrawerToggleButton;