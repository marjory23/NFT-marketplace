import React from 'react';
import Layout from '../components/Layout';
import NftCart from '../components/NftCart';

function Cart({ total }) {
  return (
    <>
      <Layout />
      <NftCart
      total={total}
      />
    </>
  )
}

export default Cart