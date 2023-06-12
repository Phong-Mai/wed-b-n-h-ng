import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card'
import { selectProducts } from '../features/counter/counterSlice';
import { Link } from 'react-router-dom'
import { addToCart } from '../features/cartSlice';
function Ssopoxiaomi() {
  const loaddata = useSelector(selectProducts)
  const dispatch = useDispatch()
  const handleAddToCart = (data) => {
    dispatch(addToCart(data))
  }
  return (
    <div>
      <h1 className='text-danger'>Samsung | Oppo | Xiaomi</h1>
      <div className='row'>
        {loaddata.map((data) => (
          data.name !== "iphone" ?
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <Card key={data.id} style={{ marginBottom: 10 }}>
                <Link to={`/detail/${data.id}`}>
                  <Card.Img id='image' variant="top" src={data.img} />
                </Link>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <h4 style={{ color: 'red' }}>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ </h4>
                  <Link onClick={() => handleAddToCart(data)} className='btn btn-primary d-flex justify-content-center' to={`/cart`}>Cart</Link>                </Card.Body>
              </Card>  </div> : undefined
        ))}
      </div>
    </div>
  )
}

export default Ssopoxiaomi
