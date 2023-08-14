import React from 'react';
import Layout from '../components/Layout';
import NftCardsList from '../components/NftCardsList';

function Shop({onBuyNow, cartItems, setCartItems, removeFromCart}) {
  return (
    <>
    <Layout />
    <NftCardsList
    onBuyNow={onBuyNow}
    cartItems={cartItems}
    setCartItems={setCartItems}
    removeFromCart={removeFromCart}
    />
    </>
  )
}

export default Shop