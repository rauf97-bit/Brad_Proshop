import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavLink} from 'react-bootstrap';

const Header = () => {
  return <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Demo Proshop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-0 ">
              <LinkContainer to='/cart'>
                <NavLink><i className="fas fa-shopping-cart"></i> Cart</NavLink>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavLink><i className="fas fa-user"></i> Sign In </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>;
};

export default Header;
