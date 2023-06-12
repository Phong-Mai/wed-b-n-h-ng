import React from 'react'
import Card from 'react-bootstrap/Card'
import {useDispatch, useSelector} from 'react-redux'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { selectProducts } from '../features/counter/counterSlice'
import {Link} from 'react-router-dom'
import { addToCart } from '../features/cartSlice';
function Productssamsung() {
    const loaddata = useSelector(selectProducts)
    const dispatch = useDispatch()
    const handleAddToCart = (data)=> {
      dispatch(addToCart(data))
    }
  return (
    <div className='bg-light'>
    <div className='container'>
    <Header></Header>
          <div className='border'>
        <Link to={`/productsiphone`}><img style={{ height:40}} className='border m-2' src='https://cdn-v2.didongviet.vn/files/categories/2023/1/24/0/1677214051673_icon_dm.png'alt='1'/></Link>
        <Link to={`/productssamsung`}><img style={{ height:40}} className='border m-2' src='https://cdn-v2.didongviet.vn/files/categories/2023/1/24/0/1677214115816_icon_samsung.png'alt='1'/></Link>
        <Link to={`/productsoppo`}><img style={{ height:40}} className='border m-2' src='https://cdn-v2.didongviet.vn/files/categories/2023/1/23/0/1677124763264_icon_dm_04.png'alt='1'/></Link>
        <Link to={`/productsxiaomi`}><img style={{ height:40}} className='border m-2' src='https://cdn-v2.didongviet.vn/files/categories/2023/3/13/0/1681352260408_xiaomi.png'alt='1'/></Link>
    </div>
    <div>
     <div className='row'>
     <h1>Samsung</h1>
        {loaddata.map((data) =>  (
            data.name === 'samsung' ?  
            <div className='col-lg-3 col-md-6 col-sm-12'>
            <Card key={data.id}  style={{marginBottom:10}}>
            <Link to={`/detail/${data.id}`}>
                <Card.Img id='image' variant="top" src={data.img} />
              </Link>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <h4 style={{color:'red'}}>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ </h4>
              <Link onClick={() => handleAddToCart(data)} className='btn btn-primary d-flex justify-content-center' to={`/cart`}>Cart</Link>            </Card.Body>
          </Card> 
          </div>: undefined
      ))}
     </div>
    </div>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default Productssamsung
