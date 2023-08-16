import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Shop from'./pages/Shop';
import Home from'./pages/Home';
import Payment from './pages/Payment';
import Success from './pages/Success';


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

  const total = cartItems.reduce((totalPrice, item) => totalPrice + item.price, 0);
  const formattedTotal = total.toFixed(2);



  return (
    <BrowserRouter>

      {/* <Header cartItems={cartItems} /> */}
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
        total={formattedTotal}
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

        <Route path='/payment' element={<Payment
        total={formattedTotal}
        setCartItems={setCartItems}
         />} />

        <Route path='/success' element={<Success
         />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
