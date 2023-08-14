import React, { useEffect } from 'react';
import { Card, Box, Container, Row, Col, Button} from 'react-bootstrap';

function NftCart({ cartItems, setCartItems }) {

  useEffect(() => {
    console.log(cartItems)
  }, [])


  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems([...updatedCartItems]);
    console.log(cartItems)
  };

  const total = cartItems.reduce((totalPrice, item) => totalPrice + item.price, 0);




  return (

    <Container>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id}>
              <Card style={{ marginBottom: '8px' }}>
                <Row>
                  <Col md={4}>
                    <Card.Img
                      variant="top"
                      src={item.imgUrl}
                      style={{ height: '100px', objectFit: 'cover' }}
                    />
                  </Col>
                  <Col md={4}>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.price} $</Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={4}>
                    <Card.Body className="d-flex justify-content-end align-items-end">
                    <Button variant="primary"
                    onClick={() => {removeFromCart(item.id)}} >Remove from cart</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
          ))}
        </ul>
      )}
      {total ? (
    <div className="d-flex justify-content-end align-items-center">
      <h3>Total: {total}</h3>
      <Button variant="primary" style={{ marginLeft: '8px' }}>Procede to checkout</Button>
    </div>
  ) : null}

    </Container>
  );
}

export default NftCart;
