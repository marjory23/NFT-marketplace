import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';

function NftModal({ show, handleClose, card,
  isCardInCart }) {

  const dispatch = useDispatch();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{card.title}</Modal.Title>
      </Modal.Header>


      <Modal.Body>
        <img src={card.imgUrl} alt={card.title} style={{ maxWidth: '100%' }} />
        <p>{card.creator}</p>
        <div>
        {card.categories.map((category, index) => (
          <span key={index} className="col-md-4 mb-4">
            {category}
            {index !== card.categories.length - 1 ? ',' : '.'}
          </span>
        ))}
        </div>
        <p>{card.price} $</p>
        <p>{card.desc}</p>
      </Modal.Body>
      <Modal.Footer>
       {!isCardInCart? <Button
            variant="primary"
            onClick={() => {
              dispatch(addToCart(card))
            }}>Buy now</Button> : <Button
            variant="primary"
            onClick={() => {
              dispatch(removeFromCart(card.id))
            }}>Remove</Button>}
      </Modal.Footer>
    </Modal>
  );
}

export default NftModal;
