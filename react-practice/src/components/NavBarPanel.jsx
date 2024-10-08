import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const cartProducts = useSelector(state => state.cart);
  return (
    <>
        <Navbar bg="light" expand="lg" >
          <Container fluid>
            <Navbar.Brand href="#">Din's Project</Navbar.Brand>

                <Nav  >
                  <Nav.Link to="/" as={Link}>Products</Nav.Link>
                </Nav>

          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
              <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>My Cart {cartProducts.length}</Nav.Link>
              </Navbar.Text>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}

export default NavBar