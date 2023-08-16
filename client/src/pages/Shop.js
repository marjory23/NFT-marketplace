import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import NftCardsList from '../components/NftCardsList';
import { useSelector } from "react-redux";


function Shop({onBuyNow, cartItems, setCartItems, removeFromCart}) {

  const data = useSelector((state) => state.data.data);
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
    <Layout />
    <NftCardsList
    />
    </>
  )
}

export default Shop