import React from 'react'
import Rating from '../components/Rating'

const Product = ({product}) => {
  return (
    <div className="card-product">
      <a href={`/product/${product._id}`}>
        <img src={product.image}></img>
      </a>
      <div className="card-body">
        <a className="card-title" href={`/product/${product._id}`}>
          <h4>{product.name}</h4>
        </a>
        <div className="card-text">
          <div className="card-text-ratings">
            <Rating 
              value={product.rating} 
              text={` ${product.numReviews} reviews`}
            />
          </div>
          <h5 className="card-text-price">{product.price}</h5>
        </div>
      </div>
    </div>
  )
}

export default Product
