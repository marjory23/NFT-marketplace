import React from 'react';
import Layout from '../components/Layout';
import NftCart from '../components/NftCart';

function Cart({onBuyNow, cartItems, setCartItems}) {
  return (
    <>
      <Layout />
      <NftCart
      onBuyNow={onBuyNow}
      cartItems={cartItems}
      setCartItems={setCartItems}
      />
    </>
  )
}

export default Cart