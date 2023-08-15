import React from 'react';
import { nftData } from '../assets/data';
import NftCard from './NftCard';
import { Container, Card, Row, Col } from 'react-bootstrap';



function NftCardsList({ onBuyNow, cartItems, setCartItems, removeFromCart }) {
  return (
    // <Container className="col-md-8" >
    //   <h2 >Shop</h2>
    //   <Row xs={1} md={2} className="g-4">
    //   {nftData.map((nft) => (
    //     <Col key={nft.id}>
    //       <Card>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //         <Card.Text>
    //           This is a longer card with supporting text below as a natural
    //           lead-in to additional content. This content is a little bit
    //           longer.
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </Col>
    // ))}
    // </Row>
    // </Container>

    <Container className="col-md-8" >
      <h2 >Shop</h2>
      <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
      {nftData.map((nft) => (
        <Col key={nft.id}>
          <NftCard
             card={nft}
             onBuyNow={onBuyNow}
             cartItems={cartItems}
             setCartItems={setCartItems}
             removeFromCart={removeFromCart}
             />
      </Col>
    ))}
    </Row>
    </Container>


    // <Container className="col-md-8" >
    //   <h2 >Shop</h2>

    //   <div className="row">
    //     {nftData.map((nft) => (
    //       <div key={nft.id} className="col-md-4 mb-4" >
    //         <NftCard
    //         card={nft}
    //         onBuyNow={onBuyNow}
    //         cartItems={cartItems}
    //         setCartItems={setCartItems}
    //         removeFromCart={removeFromCart}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </Container>

  )
}

export default NftCardsList