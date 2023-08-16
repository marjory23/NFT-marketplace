import React from 'react';
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
import { useSelector } from 'react-redux';


function App() {


  const cart = useSelector((state)=> state.cart.cartData)

  const total = cart.reduce((totalPrice, item) => totalPrice + item.price, 0);
  const formattedTotal = total.toFixed(2);



  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home
        />}/>

        <Route path='/about' element={<About
         />} />

        <Route path='/cart' element={<Cart
        total={formattedTotal}
        />} />

        <Route path='/contact' element={<Contact
         />} />

        <Route path='/shop' element={<Shop
        />} />

        <Route path='/payment' element={<Payment
        total={formattedTotal}
         />} />

        <Route path='/success' element={<Success
         />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
