import React from 'react'
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import {add} from '../store/CartSlice'
import { getProducts } from '../store/ProductSlice'


export const Product = () => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state =>state.products);

  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    // .then(data => data.json())
    // .then(result => getProducts(result))
    dispatch(getProducts());
  }, []);

  if(status === 'loading'){
    return <p>Loading... Please wait.</p>
  }

  if(status === 'error') {
    return <p>Something went wrong!</p>
  }

  const addToCart =(product) => {
    dispatch(add(product))
  }

  const cards = products.map(product => (
    <div className='col-md-3' style={{ marginBottom: '10px'}}>
    <Card key={product.id} className='h-100'>
      <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }}/>
      
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <Card.Footer style={{backgroundColor: 'white'}}>
        <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button> 
        </Card.Footer>
      </Card.Body>
      </div>
    </Card>
    </div>
  ))

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className='row'>
        {cards}
      </div>
    </div>
  )
}

export default Product
