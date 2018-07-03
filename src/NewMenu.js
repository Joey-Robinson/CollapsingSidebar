import React from 'react';

const NewMenu = (props) => {
  let visibility = 'hide';
  if(props.menuVisibility) {
    visibility = 'show';
  }
  return (
    <div 
      id="flyoutMenu"
      onMouseUp={props.handleMouseDown} 
      className={visibility}
    >
        <h2>Lorem, ipsum.</h2>
        <h2>Lorem, ipsum.</h2>
        <h2>Lorem, ipsum.</h2>
        <h2>Lorem, ipsum.</h2>
    </div>
  );
};

export default NewMenu;