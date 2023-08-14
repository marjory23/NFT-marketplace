import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function NftCard({card}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.imgUrl}
      style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.creator}</Card.Text>
        <Card.Text>{card.price} $</Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  )
}

export default NftCard