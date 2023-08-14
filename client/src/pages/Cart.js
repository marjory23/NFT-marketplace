import React from 'react';
import Layout from '../components/Layout';
import NftCart from '../components/NftCart';

function Cart({onBuyNow, cartItems, setCartItems, removeFromCart, total }) {
  return (
    <>
      <Layout />
      <NftCart
      onBuyNow={onBuyNow}
      cartItems={cartItems}
      setCartItems={setCartItems}
      removeFromCart={removeFromCart}
      total={total}
      />
    </>
  )
}

export default Cart