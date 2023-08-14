import React, { useEffect } from 'react';
import logo from '../risidio_logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Bag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


function Header(cartItems) {

  useEffect(() => {
    console.log(cartItems)
  }, [])

  const cartItemCount = cartItems ? cartItems.length : 0;
  const length = cartItems.length

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="logo" width="50" height="50" className="mr-2 nav-link" />
            <span className="custom-link" style={{ marginLeft: '8px' }}>
              Nft marketplace
            </span>
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/cart" className="nav-link d-flex align-items-center">
              <Bag size={20} className="mr-1" />
              Cart ({length})
              <span>Cart ({length})</span>
              <span>{cartItemCount}</span>

            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
