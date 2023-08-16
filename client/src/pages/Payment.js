import React from 'react';
import Layout from '../components/Layout';
import PaymentPage from '../components/PaymentPage';

function Payment({ total, setCartItems }) {
  return (
    <>
    <Layout />
    <PaymentPage
    total={ total }
    />

    </>
  )
}

export default Payment