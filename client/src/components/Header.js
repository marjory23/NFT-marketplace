import React, { useState } from 'react';
import logo from '../risidio_logo.svg';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Bag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { nftData } from '../assets/data';
import { useDispatch, useSelector } from "react-redux";
import { updateData } from '../store/dataSlice';
import { updateBrowse } from '../store/browseSlice';
import { useNavigate } from 'react-router-dom';


function Header() {

  const [searchWord, setSearchWord] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state)=> state.cart.cartData)


  const handleSubmit = (e) => {
    e.preventDefault();

    const filtered = nftData.filter((item) => {
      const lowerSearchWord = searchWord.toLowerCase();

      const titleMatch = item.title.toLowerCase().split(' ').some(word => word === lowerSearchWord);

      const creatorMatch = item.creator.toLowerCase().split(' ').some(word => word === lowerSearchWord);

      const categoryMatch = item.categories.some(category =>
        category.toLowerCase() === lowerSearchWord
      );

      return titleMatch || creatorMatch || categoryMatch;
    });

    if (filtered.length > 0) {
      dispatch(updateData({ data: filtered}));
      dispatch(updateBrowse(true));
      setSearchWord('');
      navigate('/shop');

      console.log(filtered)
      console.log(searchWord)

    } else {
      dispatch(updateData({ data: []}));
      dispatch(updateBrowse(true));
      setSearchWord('');
      navigate('/shop');


    }
  };

  const resetShop = () => {
    dispatch(updateData({ data: nftData}))
    dispatch(updateBrowse(false))
  }

  const inCart = `(${cart.length})`;
  const emptyCart = `( )`;

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
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}

                />
                <Button variant="outline-success"
                onClick={handleSubmit}
                >Search</Button>
              </Form>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/shop" className="nav-link"
              onClick={resetShop}
              >Shop</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/cart" className="nav-link d-flex align-items-center">
                <Bag size={20} className="mr-1" />
                Cart {cart.length>0? inCart : emptyCart}

              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
