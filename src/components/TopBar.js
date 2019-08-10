import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


class TopBar extends React.Component {
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
      <Navbar id="topofpage" light expand = 'md'>
        <Container>
          <NavbarBrand href ="/">
            <span> Dimitri Nikitopoulos </span>
          </NavbarBrand>
          <NavbarToggler onClick = {this.toggle}/>
          <Collapse isOpen = {this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href = '/Profile'> Profile </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = '/Playground'> Playground </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = '/Contact'> Contact </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
        <NavbarBrand href="#topofpage" className="top">
          <FontAwesomeIcon icon = {faArrowUp} />
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default TopBar;
