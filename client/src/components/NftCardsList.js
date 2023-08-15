import React from 'react';
import { nftData } from '../assets/data';
import NftCard from './NftCard';
import { Container } from 'react-bootstrap';



function NftCardsList({ onBuyNow, cartItems, setCartItems, removeFromCart }) {
  return (
    <Container className="col-md-8">
      <h2 >Shop</h2>
      <div className="row">
        {nftData.map((nft) => (
          <div key={nft.id} className="col-md-4 mb-4">
            <NftCard
            card={nft}
            onBuyNow={onBuyNow}
            cartItems={cartItems}
            setCartItems={setCartItems}
            removeFromCart={removeFromCart}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default NftCardsList