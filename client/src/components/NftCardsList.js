import React, { useEffect } from 'react';
import { nftData } from '../assets/data';
import NftCard from './NftCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { updateData } from '../store/dataSlice';
import { updateBrowse } from '../store/browseSlice';






function NftCardsList({ onBuyNow, cartItems, setCartItems, removeFromCart }) {

  const data = useSelector((state) => state.data.data);
  const browse = useSelector((state) => state.browse)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data)
  }, [])

  const resetShop = () => {
    dispatch(updateData({ data: nftData}))
    dispatch(updateBrowse(false))
  }


  return (

    <Container className="col-md-8" >
      <h2 >Shop</h2>
      <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
      {data.map((nft) => (
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
    {data.length<1 && <h3 className="mt-4">No results.</h3>}
    {browse && <Button className="mt-2"
    onClick={resetShop}>See all</Button>}
    </Container>

  )
}

export default NftCardsList