import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import NftModal from './NftModal';
import { addToCart, removeFromCart } from '../store/cartSlice';



function NftCard({ card }) {

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state)=> state.cart.cartData)

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const isCardInCart = cart.some(item => item.id === card.id);

  return (
    <Card>
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
              dispatch(addToCart(card))
            }}>Buy now</Button> : <Button
            variant="primary"
            onClick={() => {
              dispatch(removeFromCart(card.id))
            }}>Remove</Button>}
        </div>
      </Card.Body>
      <NftModal
      show={showModal}
      handleClose={handleCloseModal}
      card={card}
      isCardInCart={isCardInCart}
      />
    </Card>
  );
}

export default NftCard