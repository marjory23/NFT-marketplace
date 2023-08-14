import React from 'react';
import { nftData } from '../assets/data';
import NftCard from './NftCard'


function NftCardsList() {
  return (
    <div className="container">
      <div className="row">
        {nftData.map((nft) => (
          <div key={nft.id} className="col-md-4 mb-4">
            <NftCard
            card={nft}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NftCardsList