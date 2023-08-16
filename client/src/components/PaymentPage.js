import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../store/cartSlice';


function PaymentPage({ total, setCartItems }) {

  const dispatch = useDispatch()

  return (
    <Container className="col-md-8">
      <h2>Payment Information</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Contact Information</h4>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter your email" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Payment Method</h4>
              <Form>
                <Form.Group controlId="cardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter your card number" />
                </Form.Group>
                <Form.Group controlId="expiry">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" />
                </Form.Group>
                <Form.Group controlId="cvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="Enter CVV" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="mt-4 d-flex justify-content-end align-items-center">
        <Link to="/success">
        <Button variant="primary" size="lg"
        onClick={() => dispatch(emptyCart())}>Pay now {total}$</Button>
        </Link>
      </div>
    </Container>
  );
}

export default PaymentPage;




