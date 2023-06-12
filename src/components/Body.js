import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import Earphone from './Earphone'
import Iphone from './Iphone'
import Laptop from './Laptop'
import Ssopoxiaomi from './Ssopoxiaomi'
import Tablet from './Tablet'
import Watch from './Watch'
import { Link } from 'react-router-dom'
import './body.css'
function Body() {   
  return (
    <div className='container bg-light'>
    <div className='row border boder-dark '>
      <div className='col-lg-2 col-md-12'>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <Link style={{textDecoration:'none' ,color:'red'}} to={`/productsphone`}> <i class="fa-solid fa-mobile fa-lg"></i> &nbsp;&nbsp;&nbsp;Điện thoại</Link>
            </li>
            <li class="list-group-item">
            <Link style={{textDecoration:'none' ,color:'red'}} to={`/productslaptop`}> <i class="fa-solid fa-laptop"></i>&nbsp;&nbsp;&nbsp;Laptop</Link>
            </li>
            <li class="list-group-item">
            <Link style={{textDecoration:'none' ,color:'red'}}  to={`/productstablet`}> <i class="fa-sharp fa-solid fa-tablet-screen-button"></i> &nbsp;&nbsp;&nbsp;Tablet</Link>
            </li>
            <li class="list-group-item">
            <Link style={{textDecoration:'none' ,color:'red'}}  to={`/productsearphone`}> <i class="fa-solid fa-headphones"></i> &nbsp;&nbsp;&nbsp;Tai nghe</Link>
            </li>
            <li class="list-group-item">
            <Link style={{textDecoration:'none' ,color:'red'}}  to={`/productswatch`}> <i class="fa-sharp fa-solid fa-clock"></i> &nbsp;&nbsp;&nbsp;Đồng hồ</Link>
            </li>   
        </ul>
      </div>
      <div className=' col-md-12 col-lg-8'>
      <Carousel variant="dark">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://cdn-v2.didongviet.vn/files/banners/2023/4/15/1/1684106995768_824x400.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-v2.didongviet.vn/files/banners/2023/4/17/1/1684259692718_824x400.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-v2.didongviet.vn/files/banners/2023/3/28/1/1682678094888_824x400_2.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='col-md-12 d-none col-md-block d-lg-block col-lg-2'>
            <img className='d-block w-100 mb-3' src='https://cdn-v2.didongviet.vn/files/banners/2023/4/17/1/1684260344223_11.jpg' alt='1'/>
            <img className='d-block w-100 mb-3' src='https://cdn-v2.didongviet.vn/files/banners/2023/4/17/1/1684260329479_mac.jpg'alt='1'/>
            <img className='d-block w-100' src='https://cdn-v2.didongviet.vn/files/banners/2023/4/15/1/1684125987596_398x252_80.jpg'alt='1'/>
      </div>
    </div>
           <Iphone/>
            <Ssopoxiaomi/>
           <Laptop/>
           <Tablet/>
           <Watch/>
          <Earphone/>
     
</div>
  )
}
export default Body
