import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NftModal from './NftModal';



function NftCard({ card, onBuyNow, cartItems, removeFromCart }) {
  const [showModal, setShowModal] = useState(false);


  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const isCardInCart = cartItems.some(item => item.id === card.id);

  return (
    <Card 
    // style={{ width: '18rem' }}
    >
      <Card.Img variant="top" src={card.imgUrl} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.creator}</Card.Text>
        <Card.Text>{card.price} $</Card.Text>
        <div className="d-flex justify-content-around ">
          <Button variant="primary" onClick={handleOpenModal}>Details</Button>
          {!isCardInCart? <Button
            variant="primary"
            onClick={() => {
              onBuyNow(card);
            }}>Buy now</Button> : <Button
            variant="primary"
            onClick={() => {
              removeFromCart(card.id);
            }}>Remove</Button>}
        </div>
      </Card.Body>
      <NftModal
      show={showModal}
      handleClose={handleCloseModal}
      card={card}
      onBuyNow={onBuyNow}
      cartItems={cartItems}
      removeFromCart={removeFromCart}/>
    </Card>
  );
}

export default NftCard