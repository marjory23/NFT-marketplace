import React from 'react';
import logo from '../risidio_logo.svg';
import { Container, Navbar, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { Bag, Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


function Header(cartItems) {



  // const cartItemCount = cartItems ? cartItems.length : 0;
  const inCart = `(${cartItems.length})`

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="logo" width="50" height="50" className="mr-2 nav-link" />
            <span className="custom-link" style={{ marginLeft: '8px' }}>
              Nft Marketplace
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto
            //  align-items-center
            ">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button><Search size={20} /></Button>
                  </Col>
                </Row>
              </Form>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/shop" className="nav-link">Shop</Link>
              {/* <Link to="/contact" className="nav-link">Contact</Link> */}
              <Link to="/cart" className="nav-link d-flex align-items-center">
                <Bag size={20} className="mr-1" />
                Cart {cartItems.length>0? inCart : null}
                {/* <span>Cart ({cartItems ? cartItems.length : 0})</span>
                <span>{cartItems ? cartItems.length : 0}</span> */}

              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
