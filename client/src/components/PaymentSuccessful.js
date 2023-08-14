import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function PaymentSuccessful() {
  return (
    <Container className="col-md-8 d-flex flex-column align-items-center justify-content-center mt-5">
      <h3>Thank you. The payment was successful!</h3>
      <h3>We have sent you the download link.</h3>
      <Link to="/shop" className="custom-payment-link">
        <h4>Return to the shop</h4>
      </Link>
    </Container>
  )
}

export default PaymentSuccessful