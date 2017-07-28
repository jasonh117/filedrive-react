import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import {
  MenuButton,
  DropdownContainer,
  Item
} from './components';

const Dropdown = onClickOutside(DropdownContainer);

class MenuDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <MenuButton className="fa fa-bars" onClick={() => this.setState({ open: !this.state.open })} />
        {
          this.state.open &&
          <Dropdown handleClickOutside={() => this.setState({ open: false })}>
            <Item to="/settings">Settings</Item>
            <Item to="/login" onClick={() => localStorage.removeItem('JWT')}>Logout</Item>
          </Dropdown>
        }
      </div>
    );
  }
}

export default MenuDropdown;
