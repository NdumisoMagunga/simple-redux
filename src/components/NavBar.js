import React, { Component } from 'react';
import { Navbar,NavbarBrand,Nav,NavItem,NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom'; 
   class TopNav extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
          <Link to="/"><NavbarBrand style={{color:'black'}}><strong>Chat</strong></NavbarBrand></Link>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/about"><NavLink>About</NavLink></Link>
                </NavItem>
                <NavItem>
                <Link to="/chat"><NavLink>Chat</NavLink></Link>
                </NavItem>
              </Nav>
           
          </Navbar>
        </div>
      );
    }
  }

  
export default TopNav;