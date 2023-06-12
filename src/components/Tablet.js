import React from 'react'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { selectTablet } from '../features/counter/counterSlice'
import { Link } from 'react-router-dom'
import { addToCart } from '../features/cartSlice';
function Tablet() {
  const loaddata = useSelector(selectTablet)
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    dispatch(addToCart(data))
  }
  return (
    <div>
      <h1 className='text-danger'>Tablet</h1>
      <div className='row'>
        {loaddata.map((data) => (
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <Card key={data.id} style={{ marginBottom: 10 }}>
              <Link to={`/detail/${data.id}`}>
                <Card.Img id='image' variant="top" src={data.img} />
              </Link>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <h4 style={{ color: 'red' }}>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ </h4>
                <Link onClick={() => handleAddToCart(data)} className='btn btn-primary d-flex justify-content-center' to={`/cart`}>Cart</Link>              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tablet

