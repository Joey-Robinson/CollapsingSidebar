import React, { Component } from "react";
import NewMenu from './NewMenu';
import Button from './Button';

class MenuContainer extends Component {
  state = {
    visible: false
  };
  handleMouseDown = (event) => {
    this.toggleMenu();
    event.stopPropagation();
  }
 
  toggleMenu = () => {
    this.setState({visible: !this.state.visible});
  }
  render() {
    return (
      <div>
        <Button 
          handleMouseDown={this.handleMouseDown}
        />
        <NewMenu 
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default MenuContainer;