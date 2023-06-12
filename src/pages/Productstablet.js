import React from 'react'
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {useSelector} from 'react-redux'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { selectTablet } from '../features/counter/counterSlice'
import {Link} from 'react-router-dom'
function Productstablet() {
    const loaddata = useSelector(selectTablet)
  return (
    <div className='bg-light'>
    <div className='container bg-light'>
    <Header></Header>
    <div className='d-flex border'>
    <Link to={`/productsiphone`}><img style={{ height:40}} className='border m-2' src='https://cdn-v2.didongviet.vn/files/categories/2023/1/24/0/1677214051673_icon_dm.png'/></Link>
        <Link to={`/productssamsung`}><img style={{ height:40}} className='border m-2' src='https://cdn-v2.didongviet.vn/files/categories/2023/1/24/0/1677214115816_icon_samsung.png'/></Link>
        <Link to={`/productsoppo`}><img style={{ height:40}} className='border m-2' src='https://cdn-v2.didongviet.vn/files/categories/2023/1/23/0/1677124763264_icon_dm_04.png'/></Link>
        <Link to={`/productsxiaomi`}><img style={{ height:40}} className='border m-2' src='https://cdn-v2.didongviet.vn/files/categories/2023/3/13/0/1681352260408_xiaomi.png'/></Link>
    </div>
    <div  style={{marginTop:50, marginBottom:50}} className='row'>
       
       {loaddata.map((data) =>  (
           data.name == 'tablet' ?
           <div className='col-lg-3 col-md-6 col-sm-12'>  
           <Card key={data.id}  style={{  marginBottom:10 }}>
           <Card.Img  id='image' variant="top" src={data.img} />
           <Card.Body>
             <Card.Title>{data.title}</Card.Title>
             <h4 style={{color:'red'}}>{data.price}</h4>
             <Link className='btn btn-primary' to={`/detail/${data.id}`}>Detail</Link>
           </Card.Body>
         </Card> 
         </div> : undefined
     ))}
    </div>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default Productstablet
