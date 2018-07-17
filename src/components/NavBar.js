import React, { Component } from 'react';
import { Navbar,NavbarBrand,Nav,NavItem,NavLink, } from 'reactstrap';

   class TopNav extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><strong>Chat</strong></NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/chat">Chat</NavLink>
                </NavItem>
              </Nav>
           
          </Navbar>
        </div>
      );
    }
  }

  
export default TopNav;