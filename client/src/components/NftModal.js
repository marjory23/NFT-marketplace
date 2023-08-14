import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function NftModal({ show, handleClose, card, onBuyNow, cartItems, setCartItems }) {
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
        <Button variant="secondary"
        onClick={() => {onBuyNow(card)}}>
          Buy now
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NftModal;
