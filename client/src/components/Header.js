// import React from 'react';
// import logo from '../risidio_logo.svg';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Bag } from 'react-bootstrap-icons';

// function Header() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">
//           <img src={logo} alt="logo" width="50" height="50" />
//           </Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#shop">Shop</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//             <Nav.Link href="#cart"><Bag/> Cart(0)</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;
import React from 'react';
import logo from '../risidio_logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Bag } from 'react-bootstrap-icons';

import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
  {
    display: 'Home',
    url: '/home'
  },
  {
    display: 'About',
    url: '/About'
  },
  {
    display: 'Contact',
    url: '/Contact'
  },{
    display: 'Cart',
    url: '/Cart'
  }
]

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width="50" height="50" />
            <span>  NFT marketplace</span>
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#cart" className="d-flex align-items-center">
              <Bag size={20} className="mr-1" />
              Cart(0)
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
