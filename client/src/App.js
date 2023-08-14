import React, { useState } from 'react';
import logo from './risidio_logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Shop from'./pages/Shop';
import Home from'./pages/Home';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleBuyNow = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      setCartItems([...cartItems, item]);
      console.log(cartItems);
    } else {
      console.log('Item is already in cart.');
    }
  };
  //   setCartItems([...cartItems, item]);
  //   console.log(cartItems)
  // };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems([...updatedCartItems]);
    console.log(cartItems)
  };

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Home
        cartItems={cartItems}
        />}/>
        <Route path='/about' element={<About
        cartItems={cartItems}
         />} />
        <Route path='/cart' element={<Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}


        />} />

        <Route path='/contact' element={<Contact
        cartItems={cartItems}
         />} />
        <Route path='/shop' element={<Shop
        onBuyNow={handleBuyNow}
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}
        />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
