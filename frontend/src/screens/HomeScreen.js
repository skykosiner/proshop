import React from 'react'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <section className="collection-products">
        {products.map(product =>(
           <Product key={product._id} product={product} />
        ))}
      </section>
    </>
  )
}

export default HomeScreen
