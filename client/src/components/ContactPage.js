import React from 'react';
import { Container } from 'react-bootstrap';

function ContactPage() {
  return (
    <Container className="col-md-8">
      <h2 >Contact Us</h2>
      <p >
        <strong>Address:</strong>
        <br />
        Kemp House 152 - 160 City Road, London EC1V 2NX
      </p>
      <p>
        <strong>Email:</strong>
        <br />
        info@risidio.com
      </p>
    </Container>
  );
}

export default ContactPage;