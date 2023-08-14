import React from 'react';
import Layout from '../components/Layout';
import NftCart from '../components/NftCart';

function Cart({onBuyNow, cartItems, setCartItems, removeFromCart }) {
  return (
    <>
      <Layout />
      <NftCart
      onBuyNow={onBuyNow}
      cartItems={cartItems}
      setCartItems={setCartItems}
      removeFromCart={removeFromCart}
      />
    </>
  )
}

export default Cart