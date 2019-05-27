import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavItem, NavLink} from 'reactstrap';
import './Navbar.css'

  export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div className="Navbar">
          <Navbar color="primary" light expand="md">
            <NavbarBrand className="text-white" href="/">E-Sports</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="text-white" href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white">Profile</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }